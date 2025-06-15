import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../../../../components/input/text";
import AppButton from "../../../../components/button";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

interface IProps {
  onDismiss: () => void;
}

export default function EditBasicDetails({}: IProps) {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <AppTextInput name="email" label="First Name" type="email" />
            <AppTextInput name="password" label="Last Name" />
            <AppTextInput name="password" label="Email" />
            <AppTextInput name="password" label="Phone Number" />
            <AppTextInput as="textarea" name="password" label="Bio" containerClassName="col-span-2" />
          </div>

          <div className="flex justify-end w-full">
            <AppButton type="submit" className="mt-5">
              Submit
            </AppButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
