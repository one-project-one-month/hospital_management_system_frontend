import React from "react";
import { Home, Stethoscope, Bed, ChevronsUpDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { title: "Home", icon: <Home size={16} />, url: "/" },
  {
    title: "Doctor",
    icon: <Stethoscope size={16} />,
    url: "/doctor",
    nested: [
      { title: "Doctor List", url: "/doctor/doctorList" },
      { title: "Doctor Specialist", url: "/doctor/doctorSpecialist" },
    ],
  },
  {
    title: "Patient",
    icon: <Bed size={16} />,
    url: "/patient",
    nested: [
      { title: "Patient List", url: "/patient/patientList" },
      { title: "Medical Records", url: "/patient/medicalRecords" },
    ],
  },
];

const linkStyle = " relative px-3 py-1.5 rounded-md text-sm text-neutral-500";

function Nav() {
  return (
    <div>
      <span className=" text-xs text-neutral-400">Menu</span>
      <nav className=" mt-1 flex flex-col gap-y-1">
        {navLinks.map((navLink, id) => {
          return (
            <NavLinkButton
              title={navLink.title}
              url={navLink.url}
              icon={navLink.icon}
              nested={navLink.nested}
            />
          );
        })}
      </nav>
    </div>
  );
}

function NavLinkButton({ title, url, icon, nested }) {
  const [isOpen, setIsOpen] = useState(false);

  function dropDownToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={cn(
        "max-h-8 overflow-hidden transition-all ease-out duration-150",
        { "max-h-28": isOpen }
      )}
    >
      <NavLink
        onClick={dropDownToggle}
        to={url}
        state={{title}}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-x-2 text-sm text-neutral-500 active:scale-[.98]",
            linkStyle,
            { "bg-blue-500 text-white hover:bg-blue-500": isActive }
          )
        }
      >
        {icon}
        <span className=" grow">{title}</span>
        {nested && <ChevronsUpDown size={13} />}
      </NavLink>
      {nested && (
        <div className="relative before:block before:absolute before:left-5 before:inset-y-2.5 before:w-0.5 before:bg-neutral-200 pl-6 py-1 flex flex-col gap-y-1">
          {nested.map(({title, url}) => {
            return (
              <NavLink
              state={{title}}
                className={({ isActive }) =>
                  cn(linkStyle, {
                    "before:block before:absolute before:-left-1 before:top-1.5 before:w-0.5 before:h-5 before:rounded-full before:bg-blue-500 text-black":
                      isActive,
                  })
                }
                to={url}
              >
                {title}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Nav;
