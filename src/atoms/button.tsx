import { forwardRef, ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  title?: string;
  className?: string;
  variant?:
    | "none"
    | "primary"
    | "secondary-70"
    | "secondary"
    | "danger"
    | "success"
    | "outline-primary"
    | "outline-secondary"
    | "outline-danger"
    | "outline-success"
    | "outline-dark"
    | "transparent"
    | undefined;
  spinnerVariant?:
    | "none"
    | "primary"
    | "secondary-70"
    | "secondary"
    | "danger"
    | "success"
    | "outline-primary"
    | "outline-secondary"
    | "outline-danger"
    | "outline-success"
    | "outline-dark"
    | "transparent"
    | undefined;
  type?: "submit" | "reset" | "button";
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    name,
    variant = "none",
    spinnerVariant = variant,
    type = "button",
    disabled = false,
    loading,
    children,
    ...rest
  } = props;
  //   const { SpinnerIcon } = useIcon();

  const classProps = classNames(
    className ? className : "",
    "flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed whitespace-nowrap !rounded-[0.1875rem]",
    variant === "none" || variant === "transparent"
      ? ""
      : "min-h-[2.875rem] focus:shadow-none focus:outline-none focus:ring-0 active:shadow-md",
    variant === "primary"
      ? "bg-[#0C45F5] text-white py-4 px-5 rounded-[0.1875rem] font-medium !h-[2.875rem]"
      : "",
    variant === "secondary"
      ? "bg-[#292020] text-white py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "secondary-70"
      ? "bg-[#292020] bg-opacity-70 text-white py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "danger"
      ? "bg-red-500 text-white py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "success"
      ? "bg-[#55BD4F] text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "transparent"
      ? "bg-transparent text-[#292020] underline py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "outline-primary"
      ? "bg-white border border-[#0C45F5] text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium !h-[2.875rem]"
      : "",
    variant === "outline-secondary"
      ? "bg-white border border-[#292020] text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "outline-danger"
      ? "bg-white border border-red-500 text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "outline-success"
      ? "border border-[#55BD4F] text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant === "outline-dark"
      ? "border border-black text-[#292020] py-4 px-5 rounded-[0.1875rem] font-medium"
      : "",
    variant !== "none"
      ? "disabled:bg-[#5F5353] disabled:bg-opacity-[.35] py-4 px-5 rounded-[0.1875rem] font-medium active:shadow-[none!important] focus:shadow-[none!important]"
      : "",
    variant === "none"
      ? " disabled:bg-opacity-[.35] font-medium active:shadow-[none!important] focus:shadow-[none!important]"
      : "",
    variant === "outline-dark" || variant === "outline-secondary"
      ? "disabled:bg-transparent disabled:text-[#292020] disabled:cursor-not-allowed font-medium border border-gray-500"
      : ""
  );

  return (
    <button
      disabled={disabled}
      data-variant={variant}
      ref={ref}
      type={type}
      className={classProps}
      {...rest}
    >
      {children} {name}
    </button>
  );
});
export default Button;
