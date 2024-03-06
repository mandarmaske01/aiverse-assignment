import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate login logic
    setTimeout(() => {
      console.log('Logging in', values);
      // Redirect to homepage after successful login
      history.push('/');
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field type="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field type="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <Field type="checkbox" name="rememberMe" className="rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-700">Remember Me</span>
              </label>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 disabled:opacity-50">
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
