import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("hacker");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await API.post("/register", { name, email, password, role });
            alert("Registration successful! Please login.");
            navigate("/login");
        } catch (error) {
            alert("Registration failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <select onChange={(e) => setRole(e.target.value)}>
                    <option value="hacker">Hacker</option>
                    <option value="organization">Organization</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
