import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../../../../components/input/text";
import AppButton from "../../../../components/button";
import { useProfileContext } from "../../../../context/profile";

const validationSchema = Yup.object({
  city: Yup.string(),
  country: Yup.string(),
  postalCode: Yup.string(),
  state: Yup.string(),
  street: Yup.string(),
  emergencyContactName: Yup.string(),
  emergencyContactPhone: Yup.string(),
  emergencyContactRelationship: Yup.string(),
});

interface IProps {
  onDismiss: () => void;
}

export default function EditContactDetails({ onDismiss }: IProps) {
  const { profile, loading, updateContactDetails } = useProfileContext();

  const handleSubmit = (values: any) => {
    updateContactDetails({
      address: {
        city: values?.city,
        country: values?.country,
        postalCode: values?.postalCode,
        state: values?.state,
        street: values?.street,
      },
      emergencyContact: {
        name: values?.emergencyContactName,
        phone: values?.emergencyContactPhone,
        relationship: values?.emergencyContactRelationship,
      },
    }).then(() => {
      onDismiss();
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          street: profile?.contactDetails?.address?.street || "",
          city: profile?.contactDetails?.address?.city || "",
          state: profile?.contactDetails?.address?.state || "",
          postalCode: profile?.contactDetails?.address?.postalCode || "",
          country: profile?.contactDetails?.address?.country || "",
          emergencyContactName:
            profile?.contactDetails?.emergencyContact?.name || "",
          emergencyContactPhone:
            profile?.contactDetails?.emergencyContact?.phone || "",
          emergencyContactRelationship:
            profile?.contactDetails?.emergencyContact?.relationship || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-5">
          <div>
            <p className="font-semibold border-b pb-3">Address</p>
            <div className="grid grid-cols-2 gap-5">
              <AppTextInput name="country" label="Country" />
              <AppTextInput name="state" label="State" />
              <AppTextInput name="city" label="City" />
              <AppTextInput name="postalCode" label="Postal Code" />
              <AppTextInput
                name="street"
                label="Street Address"
                containerClassName="col-span-2"
              />
            </div>
          </div>

          <div className="mt-5">
            <p className="font-semibold border-b pb-3">Emergency Contact</p>
            <div className="grid grid-cols-2 gap-5">
              <AppTextInput
                name="emergencyContactName"
                label="Emergency Contact Name"
              />
              <AppTextInput
                name="emergencyContactPhone"
                label="Emergency Contact Phone"
              />
              <AppTextInput
                name="emergencyContactRelationship"
                label="Emergency Contact Relationship"
                containerClassName="col-span-2"
              />
            </div>
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
