// 1. form -> info from user-> list -> delete-> input -> search -> filter-> result search

import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

export default function ContactForm({ addContact }) {
  //form -> fields -> name (name, email, phone)
  //form -> label, input , error

  //   const formatNumber = /^0[0-9]{2,}[0-9]{7,}$/

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    phone: Yup.string()
      //   .matches(formatNumber, "invalid number")
      .required("phone is required"),
  })

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values)
        resetForm()
      }}
    >
      {() => (
        <Form>
          <label htmlFor="name">name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" />

          <label htmlFor="phone">phone</label>
          <Field type="text" name="phone" id="phone" />
          <ErrorMessage name="phone" />

          <button type="submit"> submit </button>
        </Form>
      )}
    </Formik>
  )
}
