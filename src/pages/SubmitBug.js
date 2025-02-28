import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

function SubmitBug() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/bug-reports", { title, description });
            alert("Bug submitted successfully");
            navigate("/dashboard");
        } catch (error) {
            alert("Failed to submit bug");
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Submit a Bug</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Bug Title" onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Bug Description" onChange={(e) => setDescription(e.target.value)} required></textarea>
                <button type="submit">Submit Bug</button>
            </form>
        </div>
    );
}

export default SubmitBug;
