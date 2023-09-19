import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
    const redirect = useNavigate()
    async function logout() {
        let response = await fetch("http://localhost:4000/logout", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        response = await response.json()
        console.log(response)
        localStorage.removeItem("user")
        redirect("/")
    }

    return (
        <nav id="Navbar">
            <NavLink className="lnk" to="/" >home</NavLink>
            <NavLink className="lnk" to="/map" >map</NavLink>

            <NavLink className="lnk" to="login" >login</NavLink>

            {localStorage.getItem('user') && <NavLink className="lnk" to="logout" onClick={logout}>logout</NavLink>}
            <NavLink className="lnk" to="register" >register</NavLink>

        </nav>
    )
}

export default Navbar