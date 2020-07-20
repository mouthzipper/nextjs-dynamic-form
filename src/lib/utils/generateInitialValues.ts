import camelcase from 'camelcase';

const generateInitialValues = (data) => {
  let values;
  data.forEach(({ name, type }) => {
    const finalName = camelcase(name);
    values = {
      ...values,
      [finalName]: type === 'multi-select' ? [] : '',
    };
  });
  return values;
};

export default generateInitialValues;
