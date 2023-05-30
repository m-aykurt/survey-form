import { size } from "lodash";
import Divider from "../../atoms/divider";
import SurveyItem from "../../components/survey/SurveyItem";
import { ISurveyItem } from "../../components/survey/model/survey-item-model";
import questions from "../../data/data.json";
import Title from "../../atoms/title";

const Survey = () => {
  console.log("questions :>> ", questions);
  return (
    <div className="mt-3">
      <Title
        titleName="Survey Form"
        className="!mb-1 ml-2 !text-[1.125rem] leading-6"
      />
      {size(questions?.questions) > 0
        ? questions.questions?.map((question: ISurveyItem, index: number) => {
            return (
              <>
                <SurveyItem
                  defaultValue={question.defaultValue}
                  name={question?.name}
                  text={question?.text}
                  type={question.type}
                  validations={question?.validations}
                  isRequired={question.isRequired}
                  options={question.options}
                  key={index}
                />
                <Divider className="!bg-[#5F535333]" />
              </>
            );
          })
        : null}
    </div>
  );
};

export default Survey;
