import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

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
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            className="bg-amber-400 px-6 py-2 rounded cursor-pointer text-white"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-amber-400 px-6 py-2 rounded cursor-pointer text-white">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
