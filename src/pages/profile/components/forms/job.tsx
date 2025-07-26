import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Radio } from "antd";
import AppTextInput from "../../../../components/input/text";
import AppButton from "../../../../components/button";
import { useProfileContext } from "../../../../context/profile";

const validationSchema = Yup.object({
  jobTitle: Yup.string(),
  employmentType: Yup.string(),
  startDate: Yup.string(),
  workMode: Yup.string(),
});

interface IProps {
  onDismiss: () => void;
}

export default function EditJobDetails({ onDismiss }: IProps) {
  const { profile, loading, updateJobDetails } = useProfileContext();

  const handleSubmit = (values: any) => {
    updateJobDetails({
      jobTitle: values.jobTitle,
      employmentType: values.employmentType,
      startDate: values.startDate,
      workMode: values.workMode,
    }).then(() => {
      onDismiss();
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          jobTitle: profile?.jobDetails?.jobTitle || "",
          employmentType: profile?.jobDetails?.employmentType || "Full-time",
          startDate: profile?.jobDetails?.startDate 
            ? new Date(profile.jobDetails.startDate).toISOString().split('T')[0]
            : "",
          workMode: profile?.jobDetails?.workMode || "Onsite",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="mt-5">
            <div className="grid grid-cols-1 gap-5">
              <AppTextInput 
                name="jobTitle" 
                label="Job Title"  
              />
              <AppTextInput 
                name="startDate" 
                label="Start Date" 
                type="date" 
              />
            </div>

            <div className="mt-5">
              <p className="font-semibold mb-3">Employment Type</p>
              <Radio.Group
                name="employmentType"
                value={values.employmentType}
                onChange={(e) => setFieldValue("employmentType", e.target.value)}
                className="grid grid-cols-2 gap-4"
              >
                <Radio value="Full-time">Full-time</Radio>
                <Radio value="Part-time">Part-time</Radio>
                <Radio value="Contract">Contract</Radio>
                <Radio value="Intern">Intern</Radio>
              </Radio.Group>
            </div>

            <div className="mt-5">
              <p className="font-semibold mb-3">Work Mode</p>
              <Radio.Group
                name="workMode"
                value={values.workMode}
                onChange={(e) => setFieldValue("workMode", e.target.value)}
                className="grid grid-cols-3 gap-4"
              >
                <Radio value="Onsite">Onsite</Radio>
                <Radio value="Remote">Remote</Radio>
                <Radio value="Hybrid">Hybrid</Radio>
              </Radio.Group>
            </div>

            <div className="flex justify-end w-full">
              <AppButton loading={loading} type="submit" className="mt-5">
                Submit
              </AppButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}