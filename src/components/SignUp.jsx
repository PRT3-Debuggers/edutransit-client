import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/styles/App.css';
import MessageModal from "../modals/MessageModal.jsx";
import signUpUser from "../scripts/signup.js";

export default function SignUp() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => setUserEmail(e.target.value);
    const handlePasswordChange = (e) => setUserPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (userPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (userPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const result = await signUpUser(userEmail, userPassword);
        console.log('Signup successful:', result);

        setUserEmail("");
        setUserPassword("");
        setConfirmPassword("");

        setModalOpen(true);
    };

    return (
        <>
            <form onSubmit={handleFormSubmit} className="formArea">
                <h1>Sign Up</h1>
                <MessageModal
                    isOpen={modalOpen}
                    onClose={() => {
                        setModalOpen(false);
                        navigate('/login');
                    }}
                    message="Signup successful"
                />
                <p>
                    <input
                        type="email"
                        onChange={handleEmailChange}
                        value={userEmail}
                        placeholder="Email"
                        required
                        className="inputText"
                    />
                </p>
                <p>
                    <input
                        type="password"
                        onChange={handlePasswordChange}
                        value={userPassword}
                        placeholder="Password"
                        required
                        className="inputText"
                    />
                </p>
                <p>
                    <input
                        type="password"
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        required
                        className="inputText"
                    />
                </p>
                <input type="submit" value="Sign Up" className="task_addbutton" />
                <br />
                <Link to="/login" className="LinkButton">
                    Already have an account? Click here to login
                </Link>
            </form>
        </>
    );
}
