// src/pages/auth/signup.tsx
import { Form, Formik } from "formik";
import AuthLayout from "../../layouts/auth";
import AppTextInput from "../../components/input/text";
import * as Yup from "yup";
import AppButton from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

export default function SignupPage() {
  const { register } = useAuthContext();
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-[500px] p-8">
        <p className="text-gray-800 dark:text-gray-100 font-extrabold text-3xl">
          Sign Up
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Enter your details to proceed</p>

        <Formik
          initialValues={{ 
            firstName: "", 
            lastName: "", 
            email: "", 
            password: "" 
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await register(values);
              navigate('/'); // Redirect to home after successful registration
            } catch (error) {
              // Handle error (e.g., show error message)
              console.error("Registration failed:", error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-md mx-auto mt-5 flex flex-col gap-5">
              <AppTextInput name="firstName" label="First Name" />
              <AppTextInput name="lastName" label="Last Name" />
              <AppTextInput name="email" label="Email" type="email" />
              <AppTextInput name="password" label="Password" type="password" />

              <AppButton 
                type="submit" 
                className="mt-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Sign Up'}
              </AppButton>
              <div className="flex items-center justify-center gap-1 text-sm">
                <p>Already have an account ?</p>
                <Link to='/auth/signin'>
                  <button className="text-violet-700 cursor-pointer">Sign In</button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
}