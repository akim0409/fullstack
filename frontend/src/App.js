import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from 'js-cookie'
import NavBar from "./NavBar";
import SignInPage from "./SignInPage";
import DogListPage from "./DogListPage";
import DogShowPage from "./DogShowPage";
import DogDateListPage from "./DogDateListPage";
import DogDateShowPage from "./DogDateShowPage";
import DogUpdatePage from "./DogUpdatePage";
import DogCreatePage from "./DogCreatePage";
import DogDateCreatePage from "./DogDateListPage/DogDateCreateForm";
import Footer from "./Footer";

const App = () => {
  const cookieToken = Cookies.get('token');
  const [sessionToken, setSessionToken] = useState(cookieToken === undefined ? null : cookieToken);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen font-nanum">
        <NavBar sessionToken={sessionToken} setSessionToken={setSessionToken}/>
        <Routes>
          <Route path="/sign-in" element={<SignInPage setSessionToken={setSessionToken} />}  />
          <Route path="/" element={<DogListPage sessionToken={sessionToken}/>} />
          <Route path="/dog/:dogId" Component={DogShowPage} />
          <Route path="/dog/update/:dogId" element={<DogUpdatePage sessionToken={sessionToken} />} />
          <Route path="/dog/new" element={<DogCreatePage sessionToken={sessionToken} />} />
          <Route path="/dates" Component={DogDateListPage} />
          <Route path="/dates/:dateId" Component={DogDateShowPage} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
