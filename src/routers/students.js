import { Router } from "express";
import { getStudentByIdController, getStudentsController } from "../controllers/students.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentsId', ctrlWrapper(getStudentByIdController));

export default router;