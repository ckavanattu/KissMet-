import React, { useState } from "react";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


export const Login = (props) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);


      // update state based on form input changes
    const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
   // submit form
   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
   
    return (
        <div className = "App">
            <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                {/* <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /> */}
                <input value={formState.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={formState.password} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
                {/* <Link to="/"><button>Log In</button></Link> */}
                <button type="submit">Log In</button>
            </form>
            <Link to="/register"><button className="link-btn" type="submit">Don't have an account? Register here.</button></Link>
            </div>
        </div>
        
        // </>
    )

}