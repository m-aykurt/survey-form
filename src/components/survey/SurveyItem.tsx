import AccordionItem from "../../atoms/accordion-item";
import { ISurveyItem } from "./model/survey-item-model";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ValidationSchema from "./model/validationSchema";
import Button from "../../atoms/button";
import { renderInput } from "../../utils/renderInput";

const SurveyItem = (props: ISurveyItem) => {
  const { defaultValue, name, text, type, validations, isRequired, options } =
    props;
  console.log("type :>> ", type);

  const initialValues = {
    name: "",
    gender: "",
    birthDate: "",
    insurances: [],
    phoneNumber: "",
  };

  return (
    <AccordionItem
      isIcon={true}
      title={name}
      className="h-[3rem] lg:px-5 px-[0.625rem]  "
      isOpenClassname="lg:mb-4 mb-0"
      boldTitleClassName="font-bold font-medium !truncate text-[1rem] text-blue-900 !leading-[1.375rem]"
      titleClassname="text-[1rem] !leading-[1.375rem] font-normal  whitespace-pre-wrap text-left text-blue-900 "
      isOpenMargin={false}
    >
      <div className="leading-[1.188rem] flex flex-col gap-2 lg:mb-8 mb-4 lg:px-5 px-[0.625rem] ">
        <div>{name}</div>
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formikProps) => (
            <Form>
              {renderInput(props, formikProps)}
              <div className="flex items-center">
                <Button className="bg-[#0C45F5] mt-2 text-white rounded-[0.188rem] font-medium !min-h-[46px] px-2 text-center">
                  Submit
                </Button>
                <Button variant="transparent" className=" underline">
                  Vazgeç
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </AccordionItem>
  );
};

export default SurveyItem;
