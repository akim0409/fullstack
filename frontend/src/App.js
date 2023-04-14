import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from 'js-cookie'
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import DogListPage from "./DogListPage";
import DogShowPage from "./DogShowPage";
import DogDateListPage from "./DogDateListPage";

const App = () => {
  const cookieToken = Cookies.get('token');
  const [sessionToken, setSessionToken] = useState(cookieToken === undefined ? null : cookieToken);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen font-nanum">
        <NavBar sessionToken={sessionToken} setSessionToken={setSessionToken}/>
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route path="/sign-in" element={<SignInPage setSessionToken={setSessionToken} />}  />
          <Route path="/" element={<DogListPage sessionToken={sessionToken}/>} />
          <Route path="/dog/:dogId" Component={DogShowPage} />
          <Route path="/dates" Component={DogDateListPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
