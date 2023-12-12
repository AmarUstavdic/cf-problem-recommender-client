import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form className="form-container">
                <div className="form-group">
                    <label htmlFor="username">Handle</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button className="btn" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
