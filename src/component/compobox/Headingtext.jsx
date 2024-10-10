import { cn } from "../../lib/utilites/cn";
import { Gradient } from "./Gradient";

export const Headingtext = ({ children, className ,gradient }) => {
  return (
    <>
      <h3
        className={
          (cn(
            "text-center capitalize text-2xl pb-[30px] text-dipperple   lg:text-[28px] font-bold" ,className
          ))
        }
      >
        {children} <Gradient>{gradient}</Gradient>
      </h3>
    </>
  );
};
