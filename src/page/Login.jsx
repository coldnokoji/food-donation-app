import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
            <main >
                <Navbar />
                <div className="background">
                    <div id="card">
                        <div id="card-content">
                            <div id="card-title">
                                <h3>Your Donation can save Someone's Life!!</h3>
                                <div className="underline-title"></div>
                            </div>
                            <form className="form">
                                <label for="user-email" style={{ paddingTop: "13px" }}>
                                    &nbsp;Email
                                </label>
                                <input id="email-address" className="form-content" type="email" name="email" autocomplete="on" required onChange={(e) => setEmail(e.target.value)} />
                                <div className="form-border"></div>
                                <label for="user-password" style={{ paddingTop: "22px" }}>&nbsp;Password
                                </label>
                                <input id="password" className="form-content" type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                                <div className="form-border"></div>
                                <a href="#">
                                    <legend id="forgot-pass">Forgot password?</legend>
                                </a>
                                <button id = "submit-btn"onClick={onLogin}>
                                    Login
                                </button>
                                <p className="text-sm text-white text-center">
                                    No account yet? {' '}
                                    <NavLink to="/signup">
                                        Sign up
                                    </NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <section>
                    <div>
                        <p> FocusApp </p>

                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                    </div>
                </section> */}
            </main>
        </>
    )
}

export default Login;