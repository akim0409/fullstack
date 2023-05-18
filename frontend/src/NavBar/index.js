import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import DeskTopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = (props) => {
  const { sessionToken, setSessionToken } = props;
  const session = sessionToken === null ? null : jwt_decode(sessionToken);

  const signOut = () => {
    setSessionToken(null);
    Cookies.remove("token");
    Cookies.remove("token", {domain: ".autumn-kim-barkr-app.com"});
  };
  
  return (
    <div className="flex justify-center items-center bg-sky-700 text-white shadow-md py-3">
      <div className="max-w-5xl w-full flex justify-between px-2 sm:px-6 font-ubuntu">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="h-[64px]"
              src="https://raw.githubusercontent.com/Hey-Programmers/htmelle-demo-site/main/images/dog_logo.png"
              alt="Logo"
            />
            <div className="ml-2 text-4xl font-semibold text-orange-400">
              Bar<span className="text-sky-500">kr</span>
            </div>
          </div>
        </Link>
        <MobileMenu session={session} signOut={signOut}/>
        <DeskTopMenu session={session} signOut={signOut}/>
      </div>
    </div>
  );
};

export default NavBar;
