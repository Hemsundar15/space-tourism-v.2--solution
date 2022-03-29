import { useState } from "react";
import Image from "next/image";

import data from "./../data/data.json";

const Destination = () => {
    const [planetIndex, setPlanetIndex] = useState(0);
    const [planets] = useState(data.destinations);

    const { name, images, description, distance, travel } =
        planets[planetIndex];

    return (
        <main className="destination">
            <div className="destination__inside">
                <div className="destination__top">
                    <h1 className="heading--5">
                        <span>01</span>
                        PICK YOUR DESTINATION
                    </h1>
                    <div className="imageholder">
                        <Image
                            src={`${images.webp}`}
                            alt={name}
                            layout="fill"
                        ></Image>
                    </div>
                </div>
                <div className="destination__bottom">
                    <div className="destination__nav">
                        {["moon", "mars", "europa", "titan"].map(
                            (value, index) => (
                                <button
                                    className={`nav--text ${
                                        planetIndex == index ? "active" : ""
                                    }`}
                                    key={index}
                                    onClick={() => setPlanetIndex(index)}
                                >
                                    {value.toUpperCase()}
                                </button>
                            )
                        )}
                    </div>
                    <h1 className="heading--2">{name.toUpperCase()}</h1>
                    <p className="description">{description}</p>

                    <div className="distance__holder">
                        <div className="distance">
                            <h1 className="subheading--2">AVG. DISTANCE</h1>
                            <h2 className="subheading--1">
                                {distance.toUpperCase()}
                            </h2>
                        </div>
                        <div className="time">
                            <h1 className="subheading--2">AVG. DISTANCE</h1>
                            <h2 className="subheading--1">
                                {travel.toUpperCase()}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg__holder">
                <div className="bg--mobile">
                    <Image
                        src="/assets/destination/background-destination-mobile.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
                <div className="bg--tablet">
                    <Image
                        src="/assets/destination/background-destination-tablet.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
                <div className="bg--desktop">
                    <Image
                        src="/assets/destination/background-destination-desktop.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </main>
    );
};

export default Destination;
