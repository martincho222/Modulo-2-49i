import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { REGISTRO_SCHEMA } from "../helpers/validationSchemas";
import Error from "./Error";

const Registro = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(REGISTRO_SCHEMA)
  })

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <label className="text-muted">Correo electrónico</label>
          <input
            type="text"
            className="form-control"
            name="username"
            {...register('username')}
          />
          {errors.username?.message && (
          <Error>
            <p>{errors.username.message}</p>
          </Error>
        )}
        </div>

        <div className="form-group mb-2">
          <label className="text-muted">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            name="name"
            {...register('name')}
          />
        </div>

        <div className="form-group mb-2">
          <label className="text-muted">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            {...register('password')}
          />
          {errors.password?.message && (
          <Error>
            <p>{errors.password.message}</p>
          </Error>
        )}
        </div>
        
        <div className="form-group">
          <label className="text-muted">Repetir contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            name="re_password" 
            {...register("re_password")}
          />
          {errors.re_password?.message && (
          <Error>
            <p>{errors.re_password.message}</p>
          </Error>
        )}
        </div>

        <button type="submit" className="btn btn-info btn-block w-100 mt-3 fw-bolder">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Registro;
