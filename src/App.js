import './App.css';
import { Route, Routes } from "react-router-dom";
import { PrimaryLayout } from "./components/Layout";
import HomePage from "./containers/Home";
import NotFoundPage from "./containers/404Page";
// import Login from "containers/Login";
// import SignUp from "containers/SignUp";
function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
