import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import HomePage from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" Component={SignUpForm}/>
      <Route path="/signin" Component={SignInForm} />
      <Route path="/home" Component={HomePage} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
