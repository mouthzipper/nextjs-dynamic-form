import camelcase from 'camelcase';

const getType = (type) => (type.includes('-') ? type.split('-')[1] : type);
const getValidations = (type) => {
  const validation = {
    required: true,
  };
  const validationByType = {
    'short-text': { minLength: 2, maxLength: 20 },
    'long-text': { minLenght: 2, maxLength: 40 },
  };

  return { ...validation, ...validationByType[type] };
};
const generateFormElSchema = (data) => {
  const { id, type, name, description, options } = data;
  return {
    id,
    type: getType(type),
    description,
    options,
    name: camelcase(name),
    label: name,
    validations: getValidations(type),
    placeholder: `Enter your ${name.toLowerCase()}`,
  };
};

export default generateFormElSchema;
