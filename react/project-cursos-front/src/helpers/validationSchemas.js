import * as yup from "yup";

export const REGISTRO_SCHEMA = yup.object({
  username: yup
    .string()
    .required("El email es obligatorio")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo no valido"),
  name: yup
    .string()
    .required("El nombre completo es requerido")
    .max(25, "El maximo son 25 caracteres")
    .min(5, "El minimo son 5 caracteres"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "El minimo son 8 caracteres")
    .max(20, "El maximo son 20 caracteres"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contaseñas no coinciden"),
});

export const LOGIN_SCHEMA = yup.object({
  username: yup
    .string()
    .required("El email no coincide")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formate de correo no valido"),
  password: yup
    .string()
    .required("La contraseña no coincide")
});
