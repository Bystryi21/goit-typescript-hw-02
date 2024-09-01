import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
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
    <header className={css.header}>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
        <Form className={css.form}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
            className={css.field}
          ></Field>
          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
