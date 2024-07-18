import createHttpError from 'http-errors';
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from '../services/students.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parceSortParams } from '../utils/parseSortParams.js';

export const getStudentsController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parceSortParams(req.query);

    const students = await getAllStudents({
      page,
      perPage,
      sortBy,
      sortOrder,
    });
    res.json({
      status: 200,
      msg: 'Students found!',
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;

  const student = await getStudentById(studentId);

  if (!student) {
    next(createHttpError(404, 'Student not found'));
  }

  res.json({
    status: 200,
    msg: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);

  res.status(201).json({
    status: 201,
    msg: 'Student created',
    data: student,
  });
};

export const deleteStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await deleteStudent(studentId);

  if (!student) {
    next(createHttpError(404, 'Student not found'));
    return;
  }
  res.status(204).send();
};

export const upsertStudentController = async (req, res, next) => {
  const { studentId } = req.params;

  const result = await updateStudent(studentId, req.body, { upsert: true });

  if (!result) {
    next(createHttpError(404, 'Student not found'));
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    msg: 'Successfully upsert student',
    data: result.student,
  });
};

export const patchStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const result = await updateStudent(studentId, req.body);

  if (!result) {
    next(createHttpError(404, 'Student not found'));
  }

  res.json({
    status: 200,
    msg: 'Successfully patched a student',
    data: result.student,
  });
};
