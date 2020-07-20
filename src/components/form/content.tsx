import FieldSet from '~/components/form/elements/fieldset';
import Input from './elements/input';
import generateFormElSchema from '~/lib/utils/generateFormElSchema';
import { useFormContext, Controller } from 'react-hook-form';
import Error from '~/components/error';
import FormSelect from './elements/select';
import Phone from './elements/phone';

const FormContent = ({ data }) => {
  const { register, errors, control } = useFormContext();
  if (!data) return null;
  return data.map((item) => {
    const {
      id,
      name,
      type,
      description,
      label,
      options,
      validations,
      placeholder,
    } = generateFormElSchema(item);
    let formEl;
    switch (type) {
      case 'text':
      case 'date':
      case 'email':
        formEl = (
          <FieldSet label={label} forLabel={id} key={id}>
            <Input
              type={type}
              name={name}
              id={id}
              title={description}
              register={register}
              validations={validations}
              placeholder={placeholder}
            />
            {errors[name] && <Error type={errors[name].type} name={label} />}
          </FieldSet>
        );
        break;
      case 'select':
      case 'dropdown':
        formEl = (
          <FieldSet label={label} forLabel={id} key={id}>
            <Controller
              name={name}
              as={
                <FormSelect
                  name={name}
                  options={options}
                  isMulti={type === 'select'}
                />
              }
              control={control}
              rules={validations}
            />
            {errors[name] && <Error type={errors[name].type} name={label} />}
          </FieldSet>
        );
        break;
      case 'number':
        formEl = (
          <FieldSet label={label} forLabel={id} key={id}>
            <Controller
              name={name}
              as={<Phone name={name} country="au" />}
              control={control}
              rules={validations}
            />
            {errors[name] && <Error type={errors[name].type} name={label} />}
          </FieldSet>
        );
        break;
      default:
        break;
    }
    return formEl;
  });
};

export default FormContent;
