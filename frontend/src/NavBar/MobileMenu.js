import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = (props) => {
  const { session, signOut } = props;
  const backgroundRef = useRef(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex sm:hidden justify-center items-center">
      <i
        className="fa-solid fa-bars text-4xl text-sky-200 cursor-pointer p-2"
        onClick={() => {
          setIsOpen(true);
        }}
      ></i>
      {isOpen ? (
        <div
          ref={backgroundRef}
          onClick={(e) => {
            if (e.target === backgroundRef.current) {
              setIsOpen(false);
            }
          }}
          className="fixed top-0 right-0 left-0 bottom-0 z-20"
        >
          <div className="fixed top-0 right-0 bg-sky-800 shadow-lg p-8 pr-24 flex flex-col text-sky-100 text-2xl">
            <i
              className="fa-solid fa-x absolute top-0 right-0 p-4 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            ></i>
            <div 
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex flex-col">
              <Link className={location.pathname === "/" ? "text-orange-400 py-3" : "py-3"} to="/">
                <i className="fa-regular fa-bone w-10"></i>
                Dogs
              </Link>
              <Link className={location.pathname === "/dates" ? "text-orange-400 py-3" : "py-3"} to="/dates">
                <i className="fa-regular fa-calendar-days w-10"></i>
                Dates
              </Link>
              {session ? (
                <div
                  className="py-3 cursor-pointer"
                  onClick={() => {
                    signOut();
                  }}
                >
                  <i className="fa-regular fa-right-from-bracket w-10"></i>
                  Sign Out
                </div>
              ) : (
                <Link className={location.pathname === "/sign-in" ? "text-orange-400 py-3" : "py-3"} to="/sign-in">
                  <i className="fa-regular fa-right-to-bracket w-10"></i>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
