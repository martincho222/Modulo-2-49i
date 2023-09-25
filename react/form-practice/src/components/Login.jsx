import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Error from './Error';
import { validateEmail } from '../utils/validationSchema';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <>
        <div className='text-center mt-20'>
            <h1 
                className='text-5xl font-bold'
            >
                Iniciar {''}
                <span className='text-sky-600'>Sesion</span>
            </h1>

            <form
                onSubmit={ handleSubmit(onSubmit) }
                className='mt-5 flex flex-col justify-center mx-auto md:w-4/12'
            >

                <label
                    htmlFor="email"
                    className='text-start font-semibold mb-1 text-lg'
                >
                    Email
                </label>
                <input 
                    id='email'
                    type="text"
                    className='border-2 shadow-md px-2 py-1 md:text-xl rounded'
                    placeholder='Email'
                    name='email'
                    {...register('email', validateEmail)}
                />
                {errors.email?.message &&
                    <Error>
                        <p>{errors.email.message}</p>
                    </Error>
                }
                
                <label 
                    htmlFor="password"
                    className='text-start font-semibold mb-1 mt-2 text-lg'
                >
                    Contraseña
                </label>
                <input 
                    id='password'
                    type="password"
                    className='border-2 shadow-md px-2 py-1 md:text-xl rounded'
                    placeholder='Contraseña'
                    name='password'
                    {...register('password', { required: 'Contraseña incorrecta' })}
                />
                {errors.password?.message &&
                    <Error>
                        <p>{errors.password.message}</p>
                    </Error>
                }

                <button
                    type='submit'
                    className='bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg mx-auto mt-5 text-lg p-2 transition-all'
                >
                    Iniciar Sesion
                </button>
            </form>
        </div>
    </>
  )
}

export default Login