import { FunctionComponent } from "react";

interface IDividerProps {
  className?: string;
}

const Divider: FunctionComponent<IDividerProps> = (props) => {
  return (
    <div
      className={
        props.className +
        " " +
        "w-full h-px divide-y divide-solid bg-[#292020] bg-opacity-10"
      }
    ></div>
  );
};
export default Divider;
