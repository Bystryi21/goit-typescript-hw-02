import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

interface SearchBarInterface {
  onSubmit: (newTopic: string) => void;
}

interface FormValues {
  value: string;
}

export default function SearchBar({ onSubmit }: SearchBarInterface) {
  const FeedbackSchema = Yup.object().shape({
    value: Yup.string()
      .matches(/^[A-z]+$/, "Must contain only letters")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValue: FormValues = {
    value: "",
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    onSubmit(values.value);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValue}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
            className={css.field}
          ></Field>
          <ErrorMessage name="value" component="div" className={css.error} />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
