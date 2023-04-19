import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";

const NavBar = (props) => {
  const { sessionToken, setSessionToken } = props;
  const session = sessionToken === null ? null : jwt_decode(sessionToken);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center bg-sky-700 text-white shadow-md py-2 ">
      <div className="max-w-5xl w-full flex justify-between px-2 sm:px-6 font-ubuntu">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-[64px]"
              src="https://raw.githubusercontent.com/Hey-Programmers/htmelle-demo-site/main/images/dog_logo.png"
              alt="Logo"
            />
            <div className="ml-2 text-4xl font-semibold text-sky-200">
              Barkr
            </div>
          </div>
        </Link>
        <div className="ml-4 flex justify-between items-center max-w-xs flex-1">
          <Link
            className="text-sky-100 text-xl sm:text-2xl hover:text-orange-300"
            to="/"
          >
            Dogs
          </Link>
          <Link
            className="text-sky-100 text-xl sm:text-2xl hover:text-orange-300"
            to="/dates"
          >
            Dates
          </Link>
          {session ? (
            <>
              <div
                onMouseLeave={() => setIsOpen(false)}
                className="text-sky-100 text-lg relative hover:bg-sky-800 px-1"
              >
                <div 
                className="m-2 flex items-center cursor-default"
                onMouseOver={() => setIsOpen(true)}>
                  <i className="mr-2 fa-solid fa-user"></i>
                  {session.username}
                  <i className="ml-2 fa-regular fa-angle-down"></i>
                </div>
                
                <div
                  className={`absolute bg-white right-0 py-2 rounded-b  w-full shadow-xl ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="cursor-pointer flex w-full items-center justify-center text-sm px-3 py-2 hover:underline text-sky-800"
                    onClick={() => {
                      setSessionToken(null);
                      Cookies.remove("token");
                      setIsOpen(false);
                    }}
                  >
                    Sign Out
                  </div>
                  <Link
                    className="cursor-pointer flex w-full items-center justify-center text-sm px-3 py-2 hover:underline text-sky-800"
                    to='/dog/new'
                  >
                    Add Doggy
                  </Link>
                </div>
              </div>
              
            
            </>
          ) : (
            <Link
              className="text-sky-100 text-xl sm:text-2xl hover:text-orange-300"
              to="/sign-in"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
