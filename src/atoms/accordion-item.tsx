import React, { ReactNode, useEffect, useState } from "react";
import Button from "./button";
import { OvalIcon } from "../atoms/oval-icon";

type Props = {
  title?: string;
  children?: ReactNode | ReactNode[];
  isIcon?: boolean;
  open?: boolean;
  openLogo?: string;
  className?: string;
  isTitleBold?: boolean;
  boldTitleClassName?: string;
  titleClassname?: string;
  isOpenClassname?: string;
  isOpenMargin?: boolean;
  onChange?: (isOpen: boolean) => void;
  isFaq?: boolean;
};

const AccordionItem = (props: Props) => {
  const {
    title,
    children,
    open = false,
    isIcon = false,
    className = "",
    isTitleBold = true,
    isOpenMargin = true,
    onChange,
    boldTitleClassName = "text-[1rem] font-medium",
    titleClassname = "text-[0.875rem] font-normal",
    isOpenClassname = "mb-4",
  } = props;
  const [isOpen, setOpen] = useState(open);
  useEffect(() => {
    //if parent comp pass onChange props
    onChange && onChange(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Button
        onClick={() => setOpen(!isOpen)}
        className={
          className +
          " h-unset " +
          `flex py-3 !truncate items-center justify-between w-full h-unset  ${
            isOpen ? isOpenClassname : "mb-0"
          }`
        }
      >
        <div
          className={`flex $
         "overflow-x-auto w-full  no-scrollbar" : ""
          `}
        >
          <div>
            {title && (
              <p
                className={`leading-[1.313rem] ${
                  !isOpen ? "line-clamp-2" : ""
                }  ${
                  isOpen && isTitleBold ? boldTitleClassName : titleClassname
                }`}
              >
                {title}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isIcon &&
            (isOpen ? (
              <img
                src="/images/icons/minus.svg"
                alt="minus"
                width={17}
                height={17}
              />
            ) : (
              <img
                src="/images/icons/plus.svg"
                alt="plus"
                width={19}
                height={19}
              />
            ))}
          <div>
            {isIcon &&
              (isIcon ? (
                <OvalIcon isResponse={true} />
              ) : (
                <OvalIcon isResponse={false} />
              ))}
          </div>
        </div>
      </Button>
      {isOpen && <div>{children}</div>}
      {isOpen && isOpenMargin && (
        <div className={` bg-gray-200 mb-[2.313rem] mt-5`}></div>
      )}
    </div>
  );
};

export default AccordionItem;
