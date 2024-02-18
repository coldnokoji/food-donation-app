import React from "react";
import './About.css';
import Navbar from '../components/navbar';
import foodDonationImg from '../assets/images/fooddonation1.jpeg';
import gardeningImg from '../assets/images/gardening.jpeg';

const About = () => {

    return (
        <>
        <Navbar/>
        <div className="body">
            <section className="gridSection">
                <div className="sectionDesc aboutusDesc">
                    <h1 className="headline">
                        AannAahar seva
                    </h1>
                    <p className="sub-headline">

                        Welcome to AannAahar Seva, a compassionate platform dedicated to fostering positive change through the noble act of charity. At AannAahar Seva, we believe in the power of giving and the transformative impact it can have on communities. Our website serves as a conduit for those who wish to make a meaningful difference by donating food. We not only accept surplus, unused food but also take pride in our commitment to sustainability. The unutilized food is repurposed to create nutrient-rich compost, contributing to environmental well-being. Through AannAahar Seva, we aim to bridge the gap between abundance and scarcity, fostering a culture of empathy and support. Join us on this journey of kindness, where every contribution, big or small, makes a significant impact on the lives of those in need. Together, let's nourish both the hungry and the Earth, one act of generosity at a time.
                    </p>
                </div>
                <div className="sectionPic bouncepic aboutusPic" id="sectionPic">
                    <img src={foodDonationImg} alt="" />
                </div>
            </section>

            {/* <!-- About us status --> */}
            <div className="statusContainer">
                <div className="status">
                    <h1><b>360</b>Food Boxes</h1>
                    <p>Every Foodbox donated brings a smile worth millions</p>
                </div>

                <div className="status">
                    <h1><b>150+</b> Donations</h1>
                    <p>Every Donation matters.</p>
                </div>

                <div className="status">
                    <h1><b>20+</b> Hotel Tieups</h1>
                    <p>Hotels are the biggest source of donations</p>
                </div>
            </div>

            <div className="services">
                <div className="aboutusimgContainer">
                    <img src="/Images/donate.jpg" alt="" />
                    <img src="./img/about-image-2.jpg" alt="" />
                </div>


            </div>




            <section className="gridSection">
                <div className="sectionDesc aboutusDesc">
                    <h1 className="headline">
                        Compost Functioning
                    </h1>
                    <p className="sub-headline">

                        At AannAahar Seva, our dedication to sustainability extends beyond food donation. We take pride in our comprehensive approach to waste reduction by converting uneatable food into nutrient-rich compost. This eco-friendly initiative not only minimizes landfill waste but also enriches the soil, promoting healthier agricultural practices. By repurposing inedible food into valuable compost, we align our mission with environmental stewardship, ensuring that every aspect of our charity platform contributes to a more sustainable and nourished future for both communities and the planet.
                    </p>
                </div>
                <div className="sectionPic bouncepic aboutusPic" id="sectionPic">
                    <img src={gardeningImg} alt="" />
                </div>
            </section>
            </div>
        </>
    )
}

export default About;