import { useEffect, useState } from "react";
import { NavItems } from "../../lib/db/Navitems";
import { Container } from "../compobox/Container";
import { MobileMenu } from "../shear/MobileMenu";
import Loginbox from "../compobox/Loginbox";
import { NavLink, Outlet } from "react-router-dom";

const Nabar = () => {
  const [toggle, settoggle] = useState(false);
  const [login, setloging] = useState(false);

  const togglerHandle = () => {
    settoggle((prv) => !prv);
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };
  const handleLoginToggle = () => {
    // Step 2: Function to toggle login button visibility
    setloging((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Container>
        <header className="px-4 lg:px-0 py-3 md:py-4 dark:border-darkcofeecolor  lg:py-5 border-b border-t-darktextdipcolor">
          <div className="flex items-center">
            <div>
              <a href="#">
                <img src="img/logo.png" alt="Logo" />
              </a>
            </div>

            <nav className="ms-auto hidden lg:block pe-[42px]">
              <ul className="flex items-center gap-0 lg:gap-[42px]">
                {NavItems.map((res, i) => (
                  <li
                    key={i}
                    className="text-textblckcolor font-semibold dark:text-darktextcolor hover:text-prepulecolor dark:hover:text-prepulecolor cursor-pointer"
                  >
                    <NavLink to={res.herf}>{res.navtext}</NavLink>
                    {/* <a herf={res.herf}>{res.navtext}</a> */}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3 ms-auto lg:ms-0">
              <button onClick={togglerHandle} className="lg:hidden block">
                <i className="ri-menu-line  text-lg lg:text-xl cursor-pointer text-textwhitecolor"></i>
              </button>
              <button className="flex items-center" onClick={handleLoginToggle}>
                <i className="ri-user-fill   text-textwhitecolor text-lg lg:text- me-1"></i>
                <span className=" hidden md:block">Sign Up</span>
              </button>

              <div className="flex items-center">
                <label className="inline-flex items-center relative">
                  <input
                    className="peer hidden cursor-pointer"
                    id="toggle"
                    type="checkbox"
                    onChange={handleTheme}
                    checked={theme === "light" ? false : true}
                    aria-label="Toggle Dark Mode"
                  />
                  <div className="relative w-[55px] h-[25px] cursor-pointer bg-white peer-checked:bg-darkcofeecolor rounded-full after:absolute after:content-[''] after:w-[20px] after:h-[20px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[2.5px] after:left-[2.5px] active:after:w-[25px] peer-checked:after:left-[52.5px] peer-checked:after:translate-x-[-100%] shadow-sm border dark:border-0 duration-300 after:duration-300 after:shadow-md"></div>
                  <svg
                    height="0"
                    width="50"
                    viewBox="0 0 24 24"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white peer-checked:opacity-60 cursor-pointer absolute w-3 h-3 left-[7px]"
                  >
                    <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                  </svg>
                  <svg
                    height="256"
                    width="256"
                    viewBox="0 0 24 24"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-black opacity-60 peer-checked:opacity-70 cursor-pointer peer-checked:fill-white absolute w-3 h-3 right-[7px]"
                  >
                    <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </header>

        {toggle && <MobileMenu toggler={togglerHandle} />}
        {login && <Loginbox logintog={handleLoginToggle} />}
      </Container>

      <Outlet />
    </>
  );
};

export default Nabar;
