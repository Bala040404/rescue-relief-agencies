
import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom";
import './register.css'
function Register() {


    const redirect = useNavigate()
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [location, setLocation] = useState("");
    let [contact, setContact] = useState("");
    let [expertise, setExpertise] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password, location, email)
        let response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                location: location,
                contact: contact,
                expertise: expertise
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
        <div class="container">

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Name of the agency</label>
                    <input type="text" value={username} onChange={(e) => {
                        setUsername(e.target.value)
                    }} /> </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div class="form-group">

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>

                <div class="form-group">
                    <label>Expertise</label>
                    <input type="text" value={expertise} onChange={(e) => {
                        setExpertise(e.target.value)
                    }} />
                </div>

                <div class="form-group">
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </div>

                <div class="form-group">
                    <label>contact</label>
                    <input type="text" value={contact} onChange={(e) => {
                        setContact(e.target.value)
                    }} />
                </div>

                <center>
                    <button type="submit">submit</button>

                </center>

            </form>
        </div>
    )
}

export default Register
