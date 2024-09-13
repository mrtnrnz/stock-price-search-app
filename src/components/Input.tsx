import type { FC, JSX, InputHTMLAttributes } from "react";
import clsx from "clsx";

import { RobotoBold, RobotoRegular, RobotoRegularItalic } from "@/shared/fonts";

type InputProps = {
  label: string;
  result: number | undefined;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={props?.id}
        className={`${RobotoBold.className} text-[#313131] capitalize leading-4 tracking-[.98px]`}
      >
        {props?.label}
      </label>
      <input
        {...props}
        className={[
          RobotoRegular.className,
          props?.className,
          clsx(
            "p-4 w-full text-black border-[1px] border-solid outline-none rounded-md",
            {
              "border-gray-800": !props?.error,
              "border-[#FF0000]": props?.error,
            }
          ),
        ].join(", ")}
      />
      {props?.result && props?.result > 0 && (
        <h3
          className={[
            RobotoBold.className,
            "text-[#313131] text-[14px] leading-4",
          ].join(", ")}
        >
          Current stock price: {props?.result || 0}
        </h3>
      )}
      {props?.error && (
        <p
          className={[
            RobotoRegularItalic.className,
            "leading-4 text-[14px] italic text-[#FF0000]",
          ].join(", ")}
        >
          {props?.error}
        </p>
      )}
    </div>
  );
};

export default Input;
