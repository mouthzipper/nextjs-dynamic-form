const FormApi = {
  all: async () => {
    const data = await (await fetch('db.json')).json();
    return data;
  },
};

export default FormApi;
