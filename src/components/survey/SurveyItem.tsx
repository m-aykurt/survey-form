import React from "react";
import AccordionItem from "../../atoms/accordion-item";
import { ISurveyItem } from "./model/survey-item-model";

const SurveyItem = (props: ISurveyItem) => {
  const { defaultValue, name, text, type, validations, isRequired, options } =
    props;
  console.log("type :>> ", type);
  const renderInput = (question: any) => {
    const { type, name, options } = question;

    switch (type) {
      case "TEXT":
        return (
          <input
            type="text"
            name={name}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        );
      case "RADIO":
        return (
          <>
            {options.map((option: any) => (
              <label key={option.key} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={name}
                  value={option.key}
                  className="form-radio text-indigo-600 h-4 w-4"
                />
                <span>{option.text}</span>
              </label>
            ))}
          </>
        );
      case "DATE":
        return (
          <input
            type="date"
            name={name}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        );
      case "CHECKBOX":
        return (
          <>
            {options.map((option: any) => (
              <label key={option.key} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={name}
                  value={option.key}
                  className="form-checkbox text-indigo-600 h-4 w-4"
                />
                <span>{option.text}</span>
              </label>
            ))}
          </>
        );
      case "NUMBER":
        return (
          <input
            type="number"
            name={name}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        );
      default:
        return null;
    }
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
        <div>{renderInput(props)}</div>
      </div>
    </AccordionItem>
  );
};

export default SurveyItem;
