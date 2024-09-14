import logo from "./logo.svg";
import "./App.css";
import { Outlet, useNavigate } from "react-router";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{
          width: "100%",
          height: 50,
          borderBottom: "solid",
          borderColor: "#e9e9e9",
        }}>
        {currentPath !== "/" ? (
          <IoChevronBackOutline size={25} onClick={() => navigate(-1)} />
        ) : null}
      </div>
      <Outlet />
    </>
  );
}

export default App;
