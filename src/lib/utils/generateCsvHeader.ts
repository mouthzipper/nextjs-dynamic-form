import camelcase from 'camelcase';

const generateCsvHeaders = (data) => {
  return data.map(({ name }) => ({ label: name, key: camelcase(name) }));
};

export default generateCsvHeaders;
