import { FunctionComponent } from "react";

interface ITitleProps {
  titleName: string;
  titleSubname?: string;
  className?: string;
}

const Title: FunctionComponent<ITitleProps> = (props) => {
  return (
    <div className={props.className + " font-medium text-md mb-5 inline-flex"}>
      {props.titleName}{" "}
      {props.titleSubname ? (
        <span className="align-middle ml-0.5 text-[.75rem]">
          {props.titleSubname}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
export default Title;
