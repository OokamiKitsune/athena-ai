import { useState } from "react";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function validatePassword(event) {
        // Assert equality between both inputs and validate password.
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        event.preventDefault();
        }
    };
    

    const handleSubmit = (event) => {
        validatePassword(event);
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} id="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} id="password" /> 
        </label>
        <br />
        <label>
            Re-enter Password:
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} id="confirm-password" /> 
        </label>
        <br></br>
        <button type="submit">Sign up</button>
      </form>
    );
    }

