"use client";

import classNames from "classnames"
import { useState } from "react";
import Image from "next/image";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

/*import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

const menuItems = [
  { id: 1, label: "View", icon: "o", link: "/wms" },
  { id: 2, label: "Prodotti", icon: "o", link: "/" },
  { id: 3, label: "Scaffalature", icon: "oo", link: "/" },
];*/


export default function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  /*const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );*/

  const wrapperClasses = classNames(
    "dark:bg-gray-700 h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": !toggleCollapse,
    }
  );

  /*
  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };*/

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Image
            className={classNames("relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert", {
              hidden: toggleCollapse,
            })}
            src="/logo.svg"
            alt="WMS3D logo"
            width={180}
            height={37}
            />
          </div>
          {isCollapsible && (
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <DoubleArrowIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-12">
          <ul>
            <li>
              1
            </li>
            <li>
              2
            </li>
          </ul>
          {/*{menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}*/}
        </div>
      </div>
    </div>
  );
}