import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Professionals", src: "User", gap: true },
    { title: "Patients ", src: "Folder" },
    { title: "Appointments ", src: "Calendar" },
    { title: "Account Setting ", src: "Setting", gap: true },
  ];
  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-sky h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center"></div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`./src/assets/${Menu.src}.png`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
