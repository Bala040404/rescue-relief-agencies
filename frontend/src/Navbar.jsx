import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const redirect = useNavigate();
  async function logout() {
    let response = await fetch("http://localhost:4000/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    response = await response.json();
    console.log(response);
    localStorage.removeItem("user");
    redirect("/");
  }

  return (
    <nav id="Navbar">

      <div>
        <div id="logo"></div>
      </div>

      <div id="navcontainer">
        <NavLink reloadDocument className="lnk" to="/">
          Home

        </NavLink>
        <NavLink reloadDocument className="lnk" to="/map">
          Map
        </NavLink>

        {!localStorage.getItem("user") && (
          <NavLink reloadDocument className="lnk" to="login">
            Login
          </NavLink>
        )}

        {localStorage.getItem("user") && (
          <NavLink className="lnk" to="logout" onClick={logout}>
            Logout
          </NavLink>
        )}
        {!localStorage.getItem("user") && (
          <NavLink reloadDocument className="lnk" to="register">
            Register
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
