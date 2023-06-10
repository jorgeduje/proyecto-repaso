import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
    
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("se envio el formulario", data);
      // pegamos al endpoint con esa data
    },
    validationSchema: Yup.object({
      email: Yup.string("debe ser un string")
        .email("no corresponde a un email")
        .required("Este campo es requerido"),
      password: Yup.string("debe ser un string")
        .required("Este campo es requerido")
        .min( 6 , "La contraseña debe tener al menos 6 caracteres" ),
    }),
  });

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
          {/* {
            values.email.length > 0 ? <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          /> : <h1>No hay email</h1>
          } */}

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormik;
