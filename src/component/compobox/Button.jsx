import { cn } from "../../lib/utilites/cn";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          "lg:px-11 lg:py-3 md:px-7 md:py-2 px-6 py-2 rounded-[10px] text-xs md:text-base bg-prepulecolor font-inter font-bold text-white dark:bg-darkgreencolor inline-block",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
