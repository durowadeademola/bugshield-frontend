import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await API.post("/logout");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/submit-bug">Submit Bug</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

export default Navbar;
