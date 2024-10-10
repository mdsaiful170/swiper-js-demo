import { cn } from "../../lib/utilites/cn";
export const Container = ({ className, children }) => {
  return (
    <div>
      <section
        className={cn("w-full max-w-screen-xl mx-auto p-2.5", className)}
      >
        {children}
      </section>
    </div>
  );
};
