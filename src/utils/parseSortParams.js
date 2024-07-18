import { SORT_ORDER } from '../constants/index.js';

export const parceSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

const parceSortBy = (sortBy) => {
  const keysOfStudents = [
    '_id',
    'name',
    'age',
    'gender',
    'avgMark',
    'onDuty',
    'createdAt',
    'updatedAt',
  ];

  if (keysOfStudents.includes(sortBy)) return sortBy;

  return '_id';
};

export const parceSortParams = (query) => {
  const { sortOrder, sortBy } = query;
  const parcedSortOrder = parceSortOrder(sortOrder);
  const parcedSortBy = parceSortBy(sortBy);

  return {
    sortOrder: parcedSortOrder,
    sortBy: parcedSortBy,
  };
};
