import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";
import DogListPage from "./DogListPage";
import DogShowPage from "./DogShowPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" Component={HomePage} />
      <Route path="/sign-in" Component={SignInPage} />
      <Route path="/" Component={DogListPage}/>
      <Route path="/dog/:dogId" Component={DogShowPage} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
