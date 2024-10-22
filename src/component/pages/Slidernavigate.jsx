import { cn } from "../../lib/utilites/cn";

export const Slidernavigate = ({ className, next, prev }) => {
  return (
    <>
      <div className=" z-10 absolute  top-[40%] w-full  flex items-center  justify-between px-10">
        <i
          className={cn(
            `size-10 text-xl font-medium bg-[#F5F6F7] rounded-[10px] text-center leading-[40px] dark:bg-darkcofeecolor cursor-pointer dark:text-darktextdipcolor ri-arrow-left-line ${next}`,
            className
          )}
        ></i>
        <i
          className={cn(
            `size-10 text-xl font-medium bg-[#F5F6F7] rounded-[10px] text-center leading-[40px] dark:bg-darkcofeecolor cursor-pointer dark:text-darktextdipcolor ri-arrow-right-line ${prev}`,
            className
          )}
        ></i>
      </div>
    </>
  );
};
