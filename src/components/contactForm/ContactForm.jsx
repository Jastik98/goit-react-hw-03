import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Phone number is required")
      .min(3, "Phone number must be at least 3 characters")
      .max(50, "Phone number must be at most 50 characters")
      .matches(/^[0-9-]+$/, "Phone number must be digits only"),
  });

  
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm(); 
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {() => (
          <Form className={css.Wrapper}>
            <div className={css.WrapperElement}>
              <label htmlFor="name">Name</label>
              <Field
                className={css.formField}
                type="text"
                id="name"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{
                  color: "red",
                }}
              />
            </div>
            <div className={css.WrapperElement}>
              <label htmlFor="number">Phone</label>
              <Field
                className={css.formField}
                type="text"
                id="number"
                name="number"
              />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <button className={css.buttonAdd} type="submit">Add contact</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
