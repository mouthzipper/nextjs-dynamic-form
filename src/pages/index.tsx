import { useCallback } from 'react';
import useSWR from 'swr';
import FormApi from '~/lib/api/form';
import Layout from '~/components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import Form from '~/components/form';
import FormContent from '~/components/form/content';
import Button from '~/components/button';
import Progress from '~/components/progress';
import { initialValues } from '~/lib/utils/constants';

const fetchFormData = async () => {
  const data = await FormApi.all();
  return data;
};
export default function Home() {
  const { data } = useSWR('form-data', fetchFormData);
  const methods = useForm();
  const onSubmit = useCallback(
    (values) => {
      methods.reset(initialValues);
    },
    [data]
  );

  return (
    <Layout>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Progress data={data} />
          <FormContent data={data} />
          <Button />
        </Form>
      </FormProvider>
    </Layout>
  );
}
