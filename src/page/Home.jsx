import React from 'react';


import Navbar from '../components/navbar';
import './Home.css';


const Home = () => {
    //const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="home-front-page">
            <div className="WelcomeTag">
                    <h1>Welcome to AannAahar</h1>
                </div>
            </div>
            <div className="bottom">
                <h1 className="tag-line">Nourish your aspirations today for a future brimming with empowerment</h1>
                <h2>Seize the opportunity to reshape destinies; a single act of providing food today can be <br/>the catalyst for the brighter future.</h2>
                <button type="submit" className="button">Join us as a Donor</button>
            </div>
            
        </>
    );
}

export default Home;
