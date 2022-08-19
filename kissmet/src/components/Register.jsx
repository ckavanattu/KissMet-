import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="Full Name" />
            <label htmlFor="age">Age</label>
            <input value={age} name="age" id="age" placeholder="Age" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="password" name="password" />
            <Link to="/home"><button type="submit"> Sign Me Up! </button ></Link>
        </form>
        <Link to="/login"><button className="link-btn"> Already have an account? Login here.</button ></Link>
    </div>
    )
}