import React from "react";
import './navbar.css';
import logo from '../assets/images/logo.jpg';
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate,NavLink } from "react-router-dom";
import { useState,useEffect } from "react";


const Navbar = () => {
    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);
      
        useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              setLoggedIn(true);
            } else {
              setLoggedIn(false);
            }
          });
      
          return () => unsubscribe(); // Cleanup subscription on component unmount
        }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        }).then(() => {
            navigate('/login');
        });
    }

    return (
        <div>
            <nav>

                <div className="WelcomeTag">
                    <h1>Welcome to AannAahar</h1>
                </div>
                <div className="navWrapper">
                    <div>
                        <div><img src={logo} alt="Logo" className="Logo" /></div>
                        <div className="LogoText">
                            <h2>AannAahar <br /> Seva</h2>
                        </div>
                    </div>
                    <div>

                        <span className="navButton"><NavLink className="navlink" to="/" >Home</NavLink></span>
                        <span className="navButton"><a className="navlink" href="#">About us</a></span>
                        <span className="navButton"><a className="navlink" href="#">Contact us</a></span>
                        <span className="navButton"><NavLink className="navlink" to="/donate" >Donate</NavLink></span>
                        <span className="navButton">{loggedIn ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <NavLink to="/login" >
                            Sign in
                        </NavLink>
                        )}</span>


                    </div>
                </div>

            </nav>

        </div>
    );
}

export default Navbar;