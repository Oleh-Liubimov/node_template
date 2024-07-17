const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';

  if (!isString) return defaultValue;

  const parcedNumber = parseInt(number);
  if (Number.isNaN(parseNumber)) {
    return defaultValue;
  }
  return parcedNumber;
};


export const parsePaginationParams = (query) => {
    const { page, perPage } = query;

    const parcedPage = parseNumber(page, 1);
    const parcedPerPage = parseNumber(perPage, 10);

    return {
        page:parcedPage,
        perPage:parcedPerPage
    };
};

