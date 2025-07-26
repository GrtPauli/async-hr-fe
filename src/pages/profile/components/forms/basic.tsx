import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../../../../components/input/text";
import AppButton from "../../../../components/button";
import { useProfileContext } from "../../../../context/profile";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string(),
  bio: Yup.string(),
});

interface IProps {
  onDismiss: () => void;
}

export default function EditBasicDetails({onDismiss}: IProps) {
  const { profile, loading, updateBasicDetails } = useProfileContext();

  const handleSubmit = (values: any) => {
    updateBasicDetails(values)
    .then(() => {
      onDismiss()
    })
  }

  return (
    <div>
      <Formik
        initialValues={{ 
          firstName: profile?.basicDetails?.firstName || "", 
          lastName: profile?.basicDetails?.lastName || "", 
          email: profile?.basicDetails?.email || "", 
          phoneNumber: profile?.basicDetails?.phoneNumber || "", 
          bio: profile?.basicDetails?.bio || "", 
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <AppTextInput name="firstName" label="First Name"/>
            <AppTextInput name="lastName" label="Last Name" />
            <AppTextInput name="email" label="Email" disabled  />
            <AppTextInput name="phoneNumber" label="Phone Number" />
            <AppTextInput as="textarea" name="bio" label="Bio" containerClassName="col-span-2" />
          </div>

          <div className="flex justify-end w-full">
            <AppButton loading={loading} type="submit" className="mt-5">
              Submit
            </AppButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
