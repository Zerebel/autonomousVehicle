/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  ButtonGroup,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../Authentication/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    link: "/profile",
  },
  {
    label: "Contact Us",
    icon: LifebuoyIcon,
    link: "/contact",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    link: "/login",
  },
];

function ProfileMenu({ setCurrentUser, signOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end"
      className=""
    >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              onClick={() => {
                if (!isLastItem) {
                  navigate(link);
                } else {
                  setCurrentUser(null);
                  signOut();
                  navigate(link);
                }
                closeMenu();
                return;
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
              key={label}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function Login_or_Signup() {
  return (
    <ButtonGroup className="block">
      <Button className="px-0 py-0">
        <Link to={"login"} className="py-3 px-4 flex">
          Login
        </Link>
      </Button>
      <Button className=" bg-blue-700 px-0 py-0 h-full">
        <Link to={"/signup"} className="py-3 px-4 flex">
          Sign up
        </Link>
      </Button>
    </ButtonGroup>
  );
}

export default function Header() {
  const { currentUser, setCurrentUser, signOut } = useContext(AuthContext);
  return (
    <Navbar className="!w-full !max-w-full !rounded-none p-2 flex ">
      <div className="relative flex items-center text-blue-gray-900 justify-between w-full">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-2xl"
        >
          Driverless
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>
        <div className="lg:ml-auto lg:flex lg:gap-4 lg:items-center">
          <span className="hidden lg:block">{currentUser && currentUser}</span>
          {currentUser ? (
            <ProfileMenu setCurrentUser={setCurrentUser} signOut={signOut} />
          ) : (
            <Login_or_Signup />
          )}
        </div>
      </div>
    </Navbar>
  );
}
