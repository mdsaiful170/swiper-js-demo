import { cn } from "../../lib/utilites/cn";


export const Gradient = ({ children, className }) => {
  return (
    <>
      <span
        className={cn(
          "bg-clip-text text-transparent bg-gradient-to-b capitalize from-prepulecolor dark:to-darktextdipcolor to-prepulecolor",
          className
        )}
      >
        {children}
      </span>
    </>
  );
};

