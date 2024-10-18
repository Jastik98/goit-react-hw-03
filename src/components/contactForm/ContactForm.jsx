import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
      .matches(/^[0-9]+$/, "Phone number must be digits only"),
  });

  // Update initialValues to match the validation schema
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm(); // Reset the form after submitting
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label htmlFor="number">Phone</label>
              <Field type="text" id="number" name="number" />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <button type="submit">Add contact</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
