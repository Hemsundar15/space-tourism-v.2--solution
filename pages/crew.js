import Image from "next/image";
import Head from "next/head";
import { Fragment, useState } from "react";

import data from "../data/data.json";
import { set } from "mongoose";

const Crew = () => {
    const [crewData] = useState(data.crew);
    const [crewIndex, setCrewIndex] = useState(0);

    const { bio, images, name, role } = crewData[crewIndex];

    return (
        <Fragment>
            <Head>
                <title>Crew | Space Tourism</title>
            </Head>
            <main className="crew">
                <h1 className="heading--5 crew__title">
                    <span>02</span>
                    MEET YOUR CREW
                </h1>

                <div className="crew__imageholder">
                    <div className="inside">
                        <Image
                            src={`${images.webp}`}
                            alt={name}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>

                <div className="crew__content">
                    <div className="crew__nav">
                        {crewData.map((value, index) => (
                            <span
                                key={index}
                                onClick={() => setCrewIndex(index)}
                                className={`crew__button ${
                                    crewIndex == index ? "active" : ""
                                }`}
                            ></span>
                        ))}
                    </div>

                    <div className="crew__textbox">
                        <h3 className="heading--4">{role.toUpperCase()}</h3>
                        <h2 className="heading--3">{name.toUpperCase()}</h2>
                        <p className="description">{bio}</p>
                    </div>
                </div>
            </main>
            <div className="bg__holder">
                <div className="bg--mobile">
                    <Image
                        src="/assets/crew/background-crew-mobile.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
                <div className="bg--tablet">
                    <Image
                        src="/assets/crew/background-crew-tablet.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
                <div className="bg--desktop">
                    <Image
                        src="/assets/crew/background-crew-desktop.jpg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </div>
        </Fragment>
    );
};

export default Crew;
