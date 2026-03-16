import React from "react";
import "../auth.form.scss";
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}> 
                    <div className="input-group">
                        <label htmlFor="email">Emial</label>
                        <input type="email" id="email" name="email" placeholder="Enter email adress" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter password" />
                    </div>
                    <button className="button prinary-buttton">Login</button>
                </form>
            </div>
        </main>
    )
};

export default Login;