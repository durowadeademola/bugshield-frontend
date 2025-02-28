import { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";

function Dashboard() {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        API.get("/bug-reports")
            .then((response) => setBugs(response.data))
            .catch(() => alert("Failed to fetch bugs"));
    }, []);

    return (
        <div>
            <Navbar />
            <h2>Bug Reports</h2>
            <ul>
                {bugs.map((bug) => (
                    <li key={bug.id}>
                        <strong>{bug.title}</strong> - {bug.description} ({bug.status})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
