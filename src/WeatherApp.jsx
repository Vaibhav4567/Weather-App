// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";

// export default function WeatherApp()
// {
//     const [weatherInfo, setWeatherInfo]=useState({
//         city: "Delhi",
//         feels_like: 24.84,
//         temp: 25.05,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather: "haze",
//     });

//     let updateInfo=(newInfo)=>{
//         setWeatherInfo(newInfo);
//     }

//     return(
//         <div style={{ textAlign: "center" }}>
//             <h2>Weather App by Vaibhav</h2>
//             <SearchBox updateInfo={updateInfo} />
//             <InfoBox info={weatherInfo} />
//         </div>
//     );
// }

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const [isAboutVisible, setAboutVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    const toggleAboutVisibility = () => {
        setAboutVisible(!isAboutVisible);
    };

    const toggleContactVisibility = () => {
        setContactVisible(!isContactVisible);
    };

    return (
        <div style={{ textAlign: "center" }}>
            {/* Navigation Bar */}
            <nav style={{ backgroundColor: "#1e3a8a", padding: "10px" }}>
                <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "center" }}>
                    <li style={{ margin: "0 20px" }}>
                        <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>
                            Home
                        </a>
                    </li>
                    <li style={{ margin: "0 20px" }}>
                        <a
                            href="#about"
                            onClick={toggleAboutVisibility}
                            style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}
                        >
                            About
                        </a>
                        {isAboutVisible && (
                            <ul style={{ textAlign: "left", padding: "0", listStyleType: "none", marginTop: "10px" }}>
                                <li>
                                    <button
                                        onClick={toggleAboutVisibility}
                                        style={{
                                            backgroundColor: "#1e3a8a",
                                            color: "#fff",
                                            padding: "10px",
                                            border: "none",
                                            width: "100%",
                                            cursor: "pointer",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {isAboutVisible ? "Hide About" : "Show About"}
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li style={{ margin: "0 20px" }}>
                        <a
                            href="#contact"
                            onClick={toggleContactVisibility}
                            style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}
                        >
                            Contact
                        </a>
                        {isContactVisible && (
                            <ul style={{ textAlign: "left", padding: "0", listStyleType: "none", marginTop: "10px" }}>
                                <li>
                                    <button
                                        onClick={toggleContactVisibility}
                                        style={{
                                            backgroundColor: "#1e3a8a",
                                            color: "#fff",
                                            padding: "10px",
                                            border: "none",
                                            width: "100%",
                                            cursor: "pointer",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {isContactVisible ? "Hide Contact" : "Show Contact"}
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            <h2 style={{ color: "#1e3a8a" }}>Weather App by Vaibhav</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />

            {/* About Section */}
            {isAboutVisible && (
                <section id="about" style={{ marginTop: "40px" }}>
                    <div
                        style={{
                            border: "2px solid #1e3a8a",
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundColor: "#f8fafc",
                            width: "80%",
                            margin: "0 auto",
                        }}
                    >
                        <h2 style={{ color: "#1e3a8a" }}>About the Weather App</h2>
                        <p style={{ textAlign: "justify", color: "#333" }}>
                            The Weather App is a web application designed to provide real-time weather
                            information for any city or location worldwide. This app aims to deliver
                            accurate and up-to-date weather data, including the current temperature,
                            humidity levels, and weather conditions such as clear skies, haze, clouds, or rain.
                        </p>
                        <p style={{ textAlign: "justify", color: "#333" }}>
                            The key features of the app include:
                        </p>
                        <ul style={{ textAlign: "justify", color: "#333" }}>
                            <li>
                                <strong>City Search:</strong> Users can search for weather details by entering
                                the name of any city or place.
                            </li>
                            <li>
                                <strong>Current Temperature:</strong> Displays the current temperature in Celsius,
                                providing real-time weather information.
                            </li>
                            <li>
                                <strong>Feels Like Temperature:</strong> The app also shows the "feels like"
                                temperature, which accounts for the wind chill or humidity, providing a more
                                accurate sense of the actual temperature you may experience.
                            </li>
                            <li>
                                <strong>Humidity Level:</strong> Humidity levels are displayed to inform users
                                about the moisture content in the air, which can impact comfort levels and health.
                            </li>
                            <li>
                                <strong>Min/Max Temperature:</strong> The app shows the minimum and maximum
                                temperatures for the day, helping users plan their activities accordingly.
                            </li>
                            <li>
                                <strong>Weather Condition:</strong> Displays the overall weather condition (such as
                                sunny, cloudy, rain, or haze), allowing users to know whether it’s a good day to
                                go out or stay inside.
                            </li>
                        </ul>
                        <p style={{ textAlign: "justify", color: "#333" }}>
                            This app is ideal for individuals who need quick access to reliable weather
                            information before heading out. Whether you’re planning outdoor activities, traveling
                            to a new city, or simply curious about the weather, this app makes it easy to stay
                            informed and prepared for the day ahead. The simple and intuitive user interface
                            ensures that users can find the weather details they need without any hassle.
                        </p>
                        <p style={{ textAlign: "justify", color: "#333" }}>
                            The goal of this project is to create a responsive, easy-to-use weather application
                            that can be a valuable tool for daily life.
                        </p>
                    </div>
                </section>
            )}

            {/* Contact Section */}
            {isContactVisible && (
                <section id="contact" style={{ marginTop: "40px" }}>
                    <div
                        style={{
                            border: "2px solid #1e3a8a",
                            borderRadius: "10px",
                            padding: "20px",
                            backgroundColor: "#f8fafc",
                            width: "80%",
                            margin: "0 auto",
                        }}
                    >
                        <h2 style={{ color: "#1e3a8a" }}>Contact</h2>
                        <p style={{ color: "#333" }}>Feel free to reach out to me:</p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            <a
                                href="tel:+919151670151"
                                style={{
                                    color: "#1e3a8a",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <i className="fa fa-phone" style={{ marginRight: "8px" }}></i>+91-9151670151
                            </a>
                            <a
                                href="mailto:vaibhavverma2526@gmail.com"
                                style={{
                                    color: "#1e3a8a",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <i className="fa fa-envelope" style={{ marginRight: "8px" }}></i>
                                vaibhavverma2526@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vaibhav-verma-8960a41bb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#1e3a8a",
                                    fontSize: "20px",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <i className="fa fa-linkedin" style={{ marginRight: "8px" }}></i>LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
