import classNames from "classnames";

export interface OvalIconProps {
  isResponse: boolean;
}

export const OvalIcon = ({ isResponse }: OvalIconProps) => {
  const classProps = classNames(
    "w-[0.5rem] h-[0.5rem] rounded-full",
    isResponse ? "bg-[#55BD4F]" : "bg-[#EC6F34]"
  );
  return <div className={classProps}></div>;
};
