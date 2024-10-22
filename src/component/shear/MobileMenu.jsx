import { NavLink } from "react-router-dom";
import { NavItems } from "../../lib/db/Navitems";

export const MobileMenu = ({ toggler }) => {
  return (
    <>
      <div className="lg:hidden block absolute top-0  w-[80%] right-0 left-0 duration-150 transition-all bg-white dark:bg-darkcofeecolor h-screen overflow-y-hidden p-6">
        <div className="flex  items-center justify-between px-3 pb-3">
          <a href="#">
            <img src="img/logo.png" alt="" className="max-w-full  w-fit" />
          </a>
          <button onClick={toggler}>
            <i className="ri-close-large-line text-2xl  font-bold text-textblckcolor dark:text-darktextdipcolor"></i>
          </button>
        </div>
        <div>
          <ul>
            {NavItems.map((res, i) => (
              <li key={i} className="mt-5 tracking-wider font-semibold">
                <NavLink to={res.herf}> {res.navtext}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
    </>
  );
};
