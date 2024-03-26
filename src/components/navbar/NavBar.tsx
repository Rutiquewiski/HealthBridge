import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { requestLogout } from "../../services/LoginService";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Menus = [
    { title: "Home", src: "Chart_fill", path: "/" },
    { title: "Professionals", src: "User", gap: true, path: "/professionals" },
    { title: "Patients", src: "Folder", path: "/patients" },
    { title: "Appointments", src: "Calendar", path: "/appointments" },
    { title: "Account Setting", src: "Setting", gap: true, path: "/account" },
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
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link to={`${Menu.path}`} key={index}>
                <li
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
              </Link>
            ))}
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  mt-9`}
              onClick={onOpen}
            >
              <img src={`./src/assets/Logo.png`} />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to logout of your account?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={requestLogout}>
              Logout
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavBar;
