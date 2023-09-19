
import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom";

function Register() {


    const redirect = useNavigate()
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [location, setLocation] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password, location, email)
        let response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                location: location
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        response = await response.json()
        console.log(response)
        localStorage.setItem("user", response.user._id)
        redirect("/")
    }

    return (
        <div id="registerCard">

            <form onSubmit={handleSubmit}>
                <label>enter the name of the agency</label>
                <input type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }} />

                <label>enter the name of the email</label>
                <input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />

                <label>enter the password</label>
                <input type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />

                <label>enter the location</label>
                <input type="text" value={location} onChange={(e) => {
                    setLocation(e.target.value)
                }} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Register
