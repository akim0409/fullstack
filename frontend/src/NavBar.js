import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';


const NavBar = (props) => {
  const { sessionToken, setSessionToken } = props;
  const session = sessionToken === null ? null : jwt_decode(sessionToken);

  return (
    <div className="flex justify-center items-center bg-sky-700 text-white shadow-md py-2 ">
      <div className="max-w-5xl w-full flex justify-between px-2 sm:px-6 font-ubuntu">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-[64px]"
              src="https://raw.githubusercontent.com/Hey-Programmers/htmelle-demo-site/main/images/dog_logo.png"
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
            
            <div className="text-sky-100 text-lg">
              <i className="mr-2 fa-solid fa-user"></i>
              {session.username}
            </div>
            <div 
              className="text-lg text-sky-100"
              onClick={() => {
                setSessionToken(null);
                Cookies.remove('token')

              }}
            >
              sign out
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
