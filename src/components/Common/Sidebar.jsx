import React, { useState, useEffect, useMemo } from "react";
import logo from "../../images/logo.svg";
import dashboard_icon from "../../images/dashboard_icon.svg";
import dashboard_icon_active from "../../images/dashboard_icon_white.svg";
import service_icon from "../../images/service_icon.svg";
import service_icon_active from "../../images/service_icon_white.svg";
import order_icon from "../../images/order_icon.svg";
import bulletins_icon from "../../images/bulletins_icon.svg";
import warranty_icon from "../../images/warranty_icon.svg";
import help_icon from "../../images/help_icon.svg";
import vehicle_icon from "../../images/vehicle_icon.svg";
import settings_icon from "../../images/settings_icon.svg";
import users_icon from "../../images/users_icon.svg";
import email_icon from "../../images/email_icon.svg";
import backup_icon from "../../images/backup_icon.svg";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // LINKS TOP
  const linksTop = [
    {
      id: "dashboard",
      text: "Dashboard",
      icon: dashboard_icon,
      activeIcon: dashboard_icon_active,
      goToLink: "/dashboard",
    },
    {
      id: "service",
      text: "Service",
      icon: service_icon,
      activeIcon: service_icon_active,
    },
    {
      id: "order",
      text: "Order",
      icon: order_icon,
      activeIcon: order_icon,
    },
    {
      id: "bulletins",
      text: "Bulletins",
      icon: bulletins_icon,
      activeIcon: bulletins_icon,
    },
    {
      id: "warranty",
      text: "Warranty",
      icon: warranty_icon,
      activeIcon: warranty_icon,
    },
    {
      id: "help",
      text: "Help",
      icon: help_icon,
      activeIcon: help_icon,
    },
    {
      id: "vehicle",
      text: "Vehicle",
      icon: vehicle_icon,
      activeIcon: vehicle_icon,
      goToLink: "/vin",
    },
  ];

  // LINKS BOTTOM
  const linksBottom = [
    {
      id: "settings",
      text: "Settings",
      icon: settings_icon,
      activeIcon: settings_icon,
    },
    {
      id: "users",
      text: "Users",
      icon: users_icon,
      activeIcon: users_icon,
    },
    {
      id: "email",
      text: "Email",
      icon: email_icon,
      activeIcon: email_icon,
    },
    {
      id: "backup",
      text: "Backup",
      icon: backup_icon,
      activeIcon: backup_icon,
    },
  ];

  // SET ACTIVE STATE ACCORDING TO URL
  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(
      currentPath === "/dashboard"
        ? "dashboard"
        : currentPath === "/service" || "/service/addNewService"
        ? "vehicle"
        : ""
    );
  }, [location]);

  return (
    <>
      <div
        className={
          props.openSidebar
            ? "w-[85%] md:w-[16.25rem] xl:w-[21.125rem] bg-black-200 fixed top-0 left-0 bottom-0 flex flex-col justify-between overflow-y-auto sidebar z-50 translate-x-0 md:translate-x-0 transition"
            : "w-[85%] md:w-[16.25rem] xl:w-[21.125rem] bg-black-200 fixed top-0 left-0 bottom-0 flex flex-col justify-between overflow-y-auto sidebar z-50 -translate-x-full md:translate-x-0 transition"
        }
      >
        {/* TOP PORTION */}
        <div>
          {/* LOGO */}
          <div className="pt-[73px]">
            <img className="mx-auto" src={logo} alt="logo" />
          </div>

          {/* LINKS */}
          <ul className="pt-[92px] px-[18px] md:px-3 xl:px-[18px] space-y-5">
            {linksTop.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.goToLink}
                  className={`w-full flex items-center justify-start pl-11 md:pl-4 xl:pl-12 py-2.5 rounded-[10px] ${
                    activeLink === link.id
                      ? "bg-gradient text-white-100"
                      : "text-white-200"
                  }`}
                  href="#abc"
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span className="w-[26px] mr-8 md:mr-3 xl:mr-[30px]">
                    <img
                      src={activeLink === link.id ? link.activeIcon : link.icon}
                      alt="icon"
                    />
                  </span>
                  <span className="text-f_22_l_28">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ID */}
          <div className="mt-[30px] flex items-center justify-center">
            <span className="text-f_24_l_30">LCEPEYL17N6000570</span>
          </div>
        </div>

        {/* BOTTOM PORTION */}
        <div className="pt-32 pb-14">
          {/* LINKS */}
          <ul className="px-[18px] md:px-3 xl:px-[18px] space-y-5">
            {linksBottom.map((link) => (
              <li key={link.id}>
                <a
                  className={`w-full flex items-center justify-start pl-11 md:pl-4 xl:pl-12 py-2.5 rounded-[10px] ${
                    activeLink === link.id
                      ? "bg-gradient text-white-100"
                      : "text-white-200"
                  }`}
                  href="#abc"
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span className="w-[26px] mr-8 md:mr-3 xl:mr-[30px]">
                    <img
                      src={activeLink === link.id ? link.activeIcon : link.icon}
                      alt="icon"
                    />
                  </span>
                  <span className="text-f_22_l_28">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE CLOSE SIDEBAR OVERLAY */}
      <div
        className={props.openSidebar ? "md:hidden fixed inset-0" : "md:hidden"}
        onClick={() => props.setOpenSidebar(false)}
      ></div>
    </>
  );
}

export default Sidebar;
