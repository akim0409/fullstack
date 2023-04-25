import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DeskTopMenu = (props) => {
  const { session, signOut } = props;
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="ml-4 justify-between items-center max-w-xs flex-1 hidden sm:flex">
      <Link
        className={location.pathname === "/" ? "text-orange-400 text-xl sm:text-2xl" : "text-sky-100 text-xl sm:text-2xl hover:text-orange-300"}
        to="/"
      >
        Dogs
      </Link>
      <Link
        className={location.pathname === "/dates" ? "text-orange-400 text-xl sm:text-2xl" : "text-sky-100 text-xl sm:text-2xl hover:text-orange-300"}
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
              onMouseOver={() => setIsOpen(true)}
            >
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
                  signOut();
                  setIsOpen(false);
                }}
              >
                Sign Out
              </div>
              <Link
                className="cursor-pointer flex w-full items-center justify-center text-sm px-3 py-2 hover:underline text-sky-800"
                to="/dog/new"
              >
                Add Doggy
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Link
          className={location.pathname === "/sign-in" ? "text-orange-400 text-xl sm:text-2xl" : "text-sky-100 text-xl sm:text-2xl hover:text-orange-300"}
          to="/sign-in"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default DeskTopMenu;
