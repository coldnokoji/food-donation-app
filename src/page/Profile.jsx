import React from "react";
import './Profile.css';
import '../components/navbar';
import { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import profile from '../assets/images/profile.jpg';
import { NavLink } from "react-router-dom";

const Profile = () =>{
    const [initialSectionsHidden, setInitialSectionsHidden] = useState(false);

    useEffect(() => {
        const donationHistorySection = document.getElementById('donation-history');
        const changePasswordSection = document.getElementById('change-password');

        if (donationHistorySection && changePasswordSection && !initialSectionsHidden) {
            // Hide Donation History and Change Password sections initially
            donationHistorySection.style.display = 'none';
            changePasswordSection.style.display = 'none';

            // Set the state to indicate that sections are initially hidden
            setInitialSectionsHidden(true);
        }
    }, [initialSectionsHidden]);

    const handleNavClick = (event) => {
        event.preventDefault();

        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });

            // Display the target section
            targetSection.style.display = 'block';
        }
    };
    return(
        <>
        <Navbar/>
        <section id="profile" className="section">
        <div className="profile-container">
            <nav className="profile-nav">
                <ul>
                    <li><a href="#profile"onClick={handleNavClick}>Profile</a></li>
                    <li><a href="#donation-history" onClick={handleNavClick}>Donation History</a></li>
                    <li><a href="#change-password" onClick={handleNavClick}>Change Password</a></li>
                </ul>
            </nav>
        </div>
        <h2>Profile InhtmlFormation</h2>
        <div className="profile-info">
            <div className="profile-pic">
                <img src={profile} alt="Profile"/>
            </div>
            <div className="details">
                <h1><strong>John Doe</strong></h1>
                <p><a href="mailto:johndoe@example.com">johndoe@example.com</a></p>
                <p><a href="tel:+917058338396">7058338396</a></p>
                <p><strong>Points Earned:</strong> 150</p>
                <NavLink className="navlink button"  to="/credit" >Redeem</NavLink>
            </div>
        </div>
    </section>

    <section id="donation-history" className="section" >
        <div className="profile-container">
            <nav className="profile-nav">
                <ul>
                    <li><a href="#profile" onClick={handleNavClick}>Profile</a></li>
                    <li><a href="#donation-history" onClick={handleNavClick}>Donation History</a></li>
                    <li><a href="#change-password" onClick={handleNavClick}>Change Password</a></li>
                </ul>
            </nav>
        </div>
        <h2>Donation History</h2>
        <div className="donation-history">
            <p>No donations yet.</p>
        </div>
    </section>

    <section id="change-password" className="section" >
        <div className="profile-container">
            <nav className="profile-nav">
                <ul>
                    <li><a href="#profile" onClick={handleNavClick}>Profile</a></li>
                    <li><a href="#donation-history" onClick={handleNavClick}>Donation History</a></li>
                    <li><a href="#change-password" onClick={handleNavClick}>Change Password</a></li>
                </ul>
            </nav>
        </div>
        <h2>Change Password</h2>
        <htmlForm action="#" method="POST">
            <label htmlFor="current-password">Current Password:</label>
            <input type="password" id="current-password" name="current-password" required/><br/>
            <label htmlFor="new-password">New Password:</label>
            <input type="password" id="new-password" name="new-password" required/><br/>
            <label htmlFor="confirm-password">Confirm New Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required/><br/>
            <button type="submit">Change Password</button>
        </htmlForm>
    </section>
        </>
    );
}

export default Profile;