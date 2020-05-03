import "../styles/form.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .min(3, 'Za krótkie imię')
      .required(),
      surname: Yup.string()
      .min(3, 'Za krótkie nazwisko')
      .required(),
      email: Yup.string()
        .email()
        .required(),
    }),
    onSubmit(values) {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Imię"
        className={formik.errors.name ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? (
        <span className="errorText">{formik.errors.name}</span>
      ) : null}
      <input
        type="text"
        name="surname"
        placeholder="Nazwisko"
        className={formik.errors.surname ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.surname}
      />
      {formik.errors.surname ? (
        <span className="errorText">{formik.errors.surname}</span>
      ) : null}
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        className={formik.errors.email ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <span className="errorText">{formik.errors.email}</span>
      ) : null}
      <textarea
        name="message"
        placeholder="Wiadomość"
        className={formik.errors.message ? "error" : null}
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      {formik.errors.message ? (
        <span className="errorText">{formik.errors.message}</span>
      ) : null}
      <button type="submit">Wyślij wiadomość</button>
    </form>
  );
}