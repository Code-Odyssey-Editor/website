import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme_switcher/theme_toggle.tsx";

export default function CommonNavbar() {

  return (
    <Navbar
      position="static"
      className="backdrop:blur rounded-full bg-gray-200/90 border hover:shadow-md transition ease-in-out duration-700 border-gray-100/40 dark:border-gray-800/40 dark:bg-gray-800/80 w-11/12 lg:w-1/2 mx-auto mt-4 xl:w-1/3 dark:shadow-blue-200/20"
    >
      <NavbarContent>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Code Odyssey Editor</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex gap-4" justify="end">
      <NavbarItem>
            <Button color="primary" variant="ghost" className="rounded-full text-center justify-center">
                <Link to="/website">Go to Home</Link>
            </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
