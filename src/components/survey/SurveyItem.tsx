import React from "react";
import AccordionItem from "../../atoms/accordion-item";
import { ISurveyItem } from "./model/survey-item-model";

const SurveyItem = (props: ISurveyItem) => {
  const { defaultValue, name, text, type, validations, isRequired, options } =
    props;

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
      <span className="leading-[1.188rem] inline-flex lg:mb-8 mb-4 lg:px-5 px-[0.625rem]">
        {text}
        {type === "TEXT"}
      </span>
    </AccordionItem>
  );
};

export default SurveyItem;
