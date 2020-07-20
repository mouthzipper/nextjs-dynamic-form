const generateCsvReadyData = (data) => {
  let body;
  Object.keys(data).forEach((key) => {
    let value = data[key];
    if (Array.isArray(data[key])) {
      value = data[key].map(({ value }) => value).join(',');
    }
    if (typeof value === 'object' && Object.keys(data[key]).length > 0) {
      value = data[key].value;
    }
    body = {
      ...body,
      [key]: value,
    };
  });
  return [body];
};

export default generateCsvReadyData;
