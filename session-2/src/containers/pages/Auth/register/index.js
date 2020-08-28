import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/actions/register';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const Register = ({ setOpen }) => {
  let history = useHistory();
  const [generateId, setId] = useState(1);
  const dispatch = useDispatch();

  const RegisterSchemaValidation = Yup.object().shape({
    first_name: Yup.string()
      .min(5, 'First Name to short')
      .max(50, 'First Name to long')
      .required('First Name is required'),
    last_name: Yup.string()
      .min(5, 'Last Name to short')
      .max(50, 'Last Name to long')
      .required('Last Name is required'),

    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),

    password: Yup.string()
      .min(5, 'Password to short')
      .required('Password is required'),
  });

  const formSignup = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchemaValidation,
    onSubmit: (values, { resetForm }) => {
      setId(generateId + 1);
      const value = {
        id: generateId,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
      };
      dispatch(register(value));
      history.push('/profile');
      resetForm({ values: '' });
    },
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center">
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              onSubmit={formSignup.handleSubmit}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    onChange={formSignup.handleChange}
                    value={formSignup.values.first_name}
                    className={`
                      w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                        formSignup.touched.first_name && formSignup.errors.first_name
                          ? 'border-red-500 '
                          : ''
                      }`}
                    id="firstName"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                  />
                  {formSignup.touched.first_name && formSignup.errors.first_name && (
                    <p className="text-xs italic text-red-500">{formSignup.errors.first_name}</p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    onChange={formSignup.handleChange}
                    value={formSignup.values.last_name}
                    className={`
                      w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                        formSignup.touched.last_name && formSignup.errors.last_name
                          ? 'border-red-500 '
                          : ''
                      }`}
                    id="lastName"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                  {formSignup.touched.last_name && formSignup.errors.last_name && (
                    <p className="text-xs italic text-red-500">{formSignup.errors.last_name}</p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={formSignup.handleChange}
                  value={formSignup.values.email}
                  className={`
                      w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                        formSignup.touched.email && formSignup.errors.email ? 'border-red-500 ' : ''
                      }`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {formSignup.touched.email && formSignup.errors.email && (
                  <p className="text-xs italic text-red-500">{formSignup.errors.email}</p>
                )}
              </div>
              <div className="mb-4 ">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={formSignup.handleChange}
                    value={formSignup.values.password}
                    className={`
                      w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                        formSignup.touched.password && formSignup.errors.password
                          ? 'border-red-500 '
                          : ''
                      }`}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******************"
                  />
                  {formSignup.touched.password && formSignup.errors.password && (
                    <p className="text-xs italic text-red-500">{formSignup.errors.password}</p>
                  )}
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit">
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html">
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
