import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
    const { login } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        login(); // Set login status to true
        alert("Login successful!");
        navigate("/"); // Redirect to home
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" required /><br />
                <input type="password" placeholder="Password" required /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
