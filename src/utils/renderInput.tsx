import { Field } from "formik";

export const renderInput = (question: any, formikProps: any) => {
  const { type, options } = question;
  let name = question.name;
  const { values, handleChange } = formikProps;

  switch (type) {
    case "TEXT":
      name = "name";
      break;
    case "RADIO":
      name = "gender";
      break;
    case "DATE":
      name = "birthDate";
      break;
    case "CHECKBOX":
      name = "insurances";
      break;
    case "NUMBER":
      name = "phone";
      break;
    default:
      return null;
  }

  switch (type) {
    case "TEXT":
      return (
        <Field
          type="text"
          id={name}
          name={name}
          value={values[name]}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      );
    case "RADIO":
      return (
        <div role="group" aria-labelledby="radio-group">
          {options.map((option: any) => (
            <div key={option.key}>
              <label>
                <Field
                  type="radio"
                  name={name}
                  value={option.key}
                  checked={values[name] === option.key}
                  onChange={handleChange}
                  className="form-radio text-indigo-600 h-4 w-4"
                />
                <span>{option.text}</span>
              </label>
            </div>
          ))}
        </div>
      );
    case "DATE":
      return (
        <Field
          type="date"
          id={name}
          name={name}
          value={values[name]}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      );
    case "CHECKBOX":
      return (
        <div role="group" aria-labelledby="checkbox-group">
          {options.map((option: any) => (
            <div key={option.key}>
              <label>
                <Field
                  type="checkbox"
                  name={name}
                  value={option.key}
                  checked={values[name]?.includes(option.key)}
                  onChange={handleChange}
                  className="form-checkbox text-indigo-600 h-4 w-4"
                />
                <span>{option.text}</span>
              </label>
            </div>
          ))}
        </div>
      );
    case "NUMBER":
      return (
        <Field
          type="number"
          id={name}
          name={name}
          value={values[name]}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      );
    default:
      return null;
  }
};
