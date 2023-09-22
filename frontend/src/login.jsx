
import { useState } from "react"

import { useNavigate } from "react-router-dom";

function Login() {


    const redirect = useNavigate()
    let [username, setUsername] = useState("");

    let [password, setPassword] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password)
        let response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        response = await response.json()
        if (response.user) {

            localStorage.setItem("user", response.user._id)
            redirect("/")
        } else {
            window.alert("invalid credentials");
            setUsername("")
            setPassword("")
            redirect("/login")
        }


    }

    return (
        <div id="loginCard">

            <form onSubmit={handleSubmit}>
                <label>enter the name of the agency</label>
                <input type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }} />



                <label>enter the password</label>
                <input type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />


                <button>submit</button>
            </form>
        </div>
    )
}

export default Login
