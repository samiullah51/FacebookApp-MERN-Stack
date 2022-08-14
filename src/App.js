import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
      {/* <Signin /> */}
      {/* <Register /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
