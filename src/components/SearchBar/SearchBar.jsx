import { Formik, Form, Field } from "formik";
// import { nanoid } from "nanoid";

export default function SearchBar({ onSubmit }) {
  const initialValue = {
    value: "",
  };
  const handleSubmit = (values, actions) => {
    onSubmit(values.value);
    actions.resetForm();
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
          ></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
