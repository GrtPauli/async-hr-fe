import { Form, Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../../../../components/input/text";
import AppButton from "../../../../components/button";
import { useProfileContext } from "../../../../context/profile";

const validationSchema = Yup.object({
  bankName: Yup.string(),
  branchCode: Yup.string(),
  accountNumber: Yup.string(),
  accountHolderName: Yup.string(),
  taxId: Yup.string(),
});

interface IProps {
  onDismiss: () => void;
}

export default function EditBankDetails({ onDismiss }: IProps) {
  const { profile, loading, updateBankDetails } = useProfileContext();

  const handleSubmit = (values: any) => {
    updateBankDetails(values).then(() => {
      onDismiss();
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
            bankName: profile?.bankDetails?.bankName || "",
            branchCode: profile?.bankDetails?.branchCode || "",
            accountNumber: profile?.bankDetails?.accountNumber || "",
            accountHolderName: profile?.bankDetails?.accountHolderName || "",
            taxId: profile?.bankDetails?.taxId || "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <AppTextInput name="bankName" label="Bank Name" />
            <AppTextInput name="branchCode" label="Branch Code" />
            <AppTextInput name="accountNumber" label="Account Number" />
            <AppTextInput
              name="accountHolderName"
              label="Account Holder Name"
            />
            <AppTextInput
              name="taxId"
              label="Tax Id"
              containerClassName="col-span-2"
            />
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
