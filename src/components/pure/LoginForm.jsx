import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ logged, fetching, onLogin }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const initialCredentials = {
    email: '',
    password: '',
  };

  return (
    <div>
      <h1>Log In</h1>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => onLogin(values.email, values.password)}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder=""></Field>
            <ErrorMessage name="email"></ErrorMessage>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder=""
            ></Field>
            <ErrorMessage name="password"></ErrorMessage>
            <button type="submit"> Log In</button>
            {fetching ? <p>Loading</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
