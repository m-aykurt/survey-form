import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name must not be shorter than 3 characters.")
    .max(25, "Your name must not be longer than 25 characters.")
    .required("Please enter your name."),
  gender: Yup.string().required("Please select your gender."),
  birthDate: Yup.date().when("gender", {
    is: (value) => value !== "OTHER",
    then: Yup.date().required("Please enter your birth date."),
  }),
  insurances: Yup.array().min(1, "Please select at least one insurance."),
  phoneNumber: Yup.string()
    .when("gender", {
      is: (value) =>
        value === "EMPLOYEE" ||
        value === "BUSINESS_OWNER" ||
        value === "STUDENT",
      then: Yup.string()
        .matches(/^\d+$/, "Your number must be only digits.")
        .min(7, "Your number must not be shorter than 7 digits.")
        .max(12, "Your number must not be longer than 12 digits.")
        .required("Please enter your phone number."),
    })
    .matches(/^\d+$/, "Your number must be only digits.")
    .min(7, "Your number must not be shorter than 7 digits.")
    .max(12, "Your number must not be longer than 12 digits.")
    .required("Please enter your phone number."),
});

export default validationSchema;
