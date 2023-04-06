import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" Component={HomePage} />
      <Route path="/sign-in" Component={SignInPage} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
