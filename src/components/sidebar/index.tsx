import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./link-group";
import { APP_LINKS } from "../../constants";
import AppLogo from "../icons/logo";

interface SidebarLink {
  title: string;
  icon: string;
  path?: string;
  children?: SidebarLink[];
  badge?: string;
}

function Sidebar({ sidebarOpen, setSidebarOpen, variant = "default" }: any) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState<any>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const renderLinkGroup = (link: SidebarLink, group: string) => {
    const isActive =
      pathname.includes(link.title.toLowerCase()) ||
      (link.children && link.children.some((child) => pathname === child.path));

    return (
      <SidebarLinkGroup
        key={`${group}-${link.title}`}
        activecondition={isActive}
      >
        {(handleClick: any, open: any) => (
          <>
            <a
              href="#0"
              className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                isActive ? "" : "hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick();
                setSidebarExpanded(true);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className={`shrink-0 fill-current ${
                      isActive
                        ? "text-violet-500"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    dangerouslySetInnerHTML={{ __html: link.icon }}
                  />
                  <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {link.title}
                  </span>
                </div>
                {link.children && (
                  <div className="flex shrink-0 ml-2">
                    <svg
                      className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${
                        open && "rotate-180"
                      }`}
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                )}
              </div>
            </a>
            {link.children && (
              <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                  {link.children.map((child) => (
                    <li key={child.title} className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to={child.path || "#"}
                        className={({ isActive }) =>
                          "block transition duration-150 truncate " +
                          (isActive
                            ? "text-violet-500"
                            : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                        }
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          {child.title}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </SidebarLinkGroup>
    );
  };

  const renderSingleLink = (link: SidebarLink) => {
    const isActive = pathname === link.path;

    return (
      <li
        key={link.title}
        className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r ${
          isActive &&
          "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
        }`}
      >
        <NavLink
          end
          to={link.path || "#"}
          className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
            isActive ? "" : "hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                className={`shrink-0 fill-current ${
                  isActive
                    ? "text-violet-500"
                    : "text-gray-400 dark:text-gray-500"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
              <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                {link.title}
              </span>
            </div>
            {link.badge && (
              <div className="flex shrink-0 ml-2">
                <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-violet-400 px-2 rounded-sm">
                  {link.badge}
                </span>
              </div>
            )}
          </div>
        </NavLink>
      </li>
    );
  };

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${
          variant === "v2"
            ? "border-r border-gray-200 dark:border-gray-700/60"
            : "rounded-r-2xl shadow-xs"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <AppLogo/>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {APP_LINKS.pages.map((link: any) => renderLinkGroup(link, "pages"))}
              {APP_LINKS.singleLinks.map((link: any) => renderSingleLink(link))}
            </ul>
          </div>

          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
            <ul className="mt-3">
              {APP_LINKS.more.map((link: any) => renderLinkGroup(link, "more"))}
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
