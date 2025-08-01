// src/pages/auth/signin.tsx
import { Form, Formik } from "formik";
import AuthLayout from "../../layouts/auth";
import AppTextInput from "../../components/input/text";
import * as Yup from "yup";
import AppButton from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export default function SigninPage() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-[500px] p-8">
        <p className="text-gray-800 dark:text-gray-100 font-extrabold text-3xl">
          Sign In
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Welcome back</p>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              await login(values);
              navigate('/'); // Redirect to home after successful login
            } catch (error) {
              setFieldError('email', 'Invalid credentials');
              setFieldError('password', 'Invalid credentials');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-md mx-auto mt-5 flex flex-col gap-5">
              <AppTextInput name="email" label="Email" type="email" />
              <AppTextInput name="password" label="Password" type="password" />

              <AppButton 
                type="submit" 
                className="mt-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </AppButton>
              <div className="flex items-center justify-center gap-1 text-sm">
                <p>Don't have an account ?</p>
                <Link to='/auth/signup'>
                  <button className="text-violet-700 cursor-pointer">Sign Up</button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
}