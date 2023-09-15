import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const Navbar = ({ handleChangeLangueage }) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const handleClickOpenMenu = () => {
    setIsShowNav(!isShowNav);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);
  return (
    <article className="sticky top-0 z-20">
      <nav className="bg-[#213555] dark:bg-[#121b29] shadow-2xl shadow-cyan-900 dark:text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img src="/logo-mioo.png" className="h-8 mr-3" alt="github" />
            <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-white dark:text-white animate-pulse">
              G. Julian
            </span>
          </a>
          <button
            onClick={handleChangeTheme}
            className="flex items-center justify-center gap-2 font-semibold border p-1 rounded-md w-[40px] h-[34px]"
          >
            {isDarkTheme ? (
              <i class="bx bx-moon"></i>
            ) : (
              <i class="bx bxs-moon"></i>
            )}
          </button>

          <button
            onClick={handleChangeLangueage}
            className="w-[50px] grid items-center justify-center border p-1 rounded-md"
          >
            <img className="w-6" src="/trad.png" alt="" />
          </button>
          <button
            onClick={handleClickOpenMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-500 focus:outline-none bg-gray-50 focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={` w-full md:block md:w-auto ${
              isShowNav ? "hidden" : "visible"
            } sm:visible`}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#213555] md:dark:bg-[#121b29] `}
            >
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white"
                  aria-current="page"
                >
                  <FormattedMessage id="app.home" defaultMessage="home" />
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FormattedMessage
                    id="app.aboutme"
                    defaultMessage="about me"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#skillset"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FormattedMessage
                    id="app.skillset"
                    defaultMessage="skillset"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FormattedMessage
                    id="app.projects"
                    defaultMessage="projects"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <FormattedMessage id="app.contact" defaultMessage="contact" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </article>
  );
};

export default Navbar;
