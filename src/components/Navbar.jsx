import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Dropdown } from "flowbite-react";
import { ImMenu } from "react-icons/im";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-amber-400 text-4xl font-bold cursor-pointer">
          CINEFLIX
        </h1>
      </Link>
      {user ? (
        <>
          <div className="hidden md:flex">
            <Link to="/account">
              <button className="text-white pr-4 py-2">Account</button>
            </Link>

            <button
              className="bg-amber-400 px-6 py-2 rounded cursor-pointer text-white"
              onClick={logout}
            >
              Logout
            </button>
          </div>
          <div className="md:hidden flex">
            <Dropdown arrowIcon={false} inline={true} label={<FiMenu />}>
              <Dropdown.Header>
                <span className="block text-sm font-semibold">
                  {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/account">Account</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown>
          </div>
        </>
      ) : (
        <>
          <div className="md:flex hidden">
            <Link to="/login">
              <button className="text-white pr-4 py-2">Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="bg-amber-400 px-6 py-2 rounded cursor-pointer text-white">
                Create Account
              </button>
            </Link>
          </div>
          <div className="md:hidden flex">
            <Dropdown arrowIcon={false} label={<FiMenu />}>
              <Dropdown.Item>
                <Link to="/login">Sign in</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/signup">Create Account</Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
