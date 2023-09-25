import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_SCHEMA } from "../helpers/validationSchemas";
import Error from "./Error";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="text-muted">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          name="username"
          {...register("username")}
        />
        {errors.username?.message && (
          <Error>
            <p>{errors.username.message}</p>
          </Error>
        )}
      </div>
      <div className="form-group mb-3">
        <label className="text-muted">Contraseña</label>
        <input
          type="password"
          className="form-control"
          name="password"
          {...register("password")}
        />
        {errors.password?.message && (
          <Error>
            <p>{errors.password.message}</p>
          </Error>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-info btn-block w-100 fw-bolder fs-5"
      >
        Entrar
      </button>
    </form>
  );
};

export default Login;
