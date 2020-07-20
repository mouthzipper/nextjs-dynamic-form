import { useCallback, useState, useRef } from 'react';
import useSWR from 'swr';
import { CSVLink } from 'react-csv';
import FormApi from '~/lib/api/form';
import Layout from '~/components/layout';
import { useForm, FormProvider } from 'react-hook-form';
import Form from '~/components/form';
import FormContent from '~/components/form/content';
import Button from '~/components/button';
import Progress from '~/components/progress';
import generateCsvReadyData from '~/lib/utils/generateCsvReadyData';
import generateCsvHeader from '~/lib/utils/generateCsvHeader';
import generateInitialValues from '~/lib/utils/generateInitialValues';

const fetchFormData = async () => {
  const data = await FormApi.all();
  return data;
};

export default function Home() {
  const [csvData, setCsvData] = useState([]);
  const [csvHeaders, setCsvHeaders] = useState([]);
  const csvRef = useRef<CSVLink>(null);
  // simulate calling dynamic data from the api
  const { data } = useSWR('form-data', fetchFormData);
  const methods = useForm();
  const onSubmit = useCallback(
    (values) => {
      // set csvlink data and headers to download
      setCsvData(generateCsvReadyData(values));
      setCsvHeaders(generateCsvHeader(data));
      // now downdlink csv
      csvRef.current.link.click();
      // manually reset to initial values since it's using 3rd party ui library
      methods.reset(generateInitialValues(data));
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
          <CSVLink
            data={csvData}
            headers={csvHeaders}
            filename={'submissions.csv'}
            className="hidden"
            ref={csvRef}
            target="_blank"
          />
        </Form>
      </FormProvider>
    </Layout>
  );
}
