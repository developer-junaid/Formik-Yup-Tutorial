import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const FormikYupForm = () => {
  // Formik logic
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // Validate using yup
    validationSchema: yup.object({
      // yup.type().validationType().required()
      email: yup.string().email().required("This field is required."),
      password: yup
        .string()
        .min(6, "Password too short.")
        .max(12, "Password too long")
        .required("This field is required"),
    }),
  });

  //Return
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          boxShadow: "2px 2px 2px black",
          border: "0.5px solid gray",
          padding: "4rem",
          maxWidth: "50vw",
          fontSize: "1.2rem",
        }}
        onSubmit={formik.handleSubmit}
      >
        <label style={{ padding: "0.5rem" }} htmlFor="email">
          Enter Email:{" "}
          <input
            style={{ padding: "0.5rem", fontSize: "1.2rem", margin: "1rem" }}
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </label>

        <label style={{ padding: "0.5rem" }} htmlFor="password">
          Enter Password:{" "}
          <input
            style={{ padding: "0.5rem", fontSize: "1.2rem", margin: "1rem" }}
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </label>

        <input
          type="submit"
          style={{
            padding: "1rem 1.5rem",
            width: "27vw",
            cursor: "pointer",
            fontSize: "1.2rem",
            margin: "1rem",
          }}
        />
      </form>
    </div>
  );
};

export default FormikYupForm;
