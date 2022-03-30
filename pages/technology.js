import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";

import data from "../data/data.json";

import ImageHolder from "../components/technology/ImageHolder";

const Technology = () => {
    const [techIndex, setTechIndex] = useState(0);
    const [technology] = useState(data.technology);
    console.log(technology);

    const { name, images, description } = technology[techIndex];

    return (
        <Fragment>
            <Head>
                <title>Crew | Space Tourism</title>
            </Head>
            <main className="technology">
                <div className="technology__inside">
                    <h1 className="heading--5">
                        <span>03</span>
                        SPACE LAUNCH 101
                    </h1>

                    <ImageHolder imageUrl={images}></ImageHolder>

                    <div className="technology__content">
                        <div className="technology__nav">
                            {[1, 2, 3].map((num, index) => (
                                <button
                                    key={index}
                                    className={`button ${
                                        techIndex == index ? "active" : ""
                                    }`}
                                    onClick={() => setTechIndex(index)}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        <div className="textbox">
                            <h2 className="nav--text">THE TERMINOLOGY...</h2>
                            <h3 className="heading--3">{name.toUpperCase()}</h3>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                </div>

                <div className="bg__holder">
                    <div className="bg--mobile">
                        <Image
                            src="/assets/technology/background-technology-mobile.jpg"
                            alt="background"
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    <div className="bg--tablet">
                        <Image
                            src="/assets/technology/background-technology-tablet.jpg"
                            alt="background"
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                    <div className="bg--desktop">
                        <Image
                            src="/assets/technology/background-technology-desktop.jpg"
                            alt="background"
                            layout="fill"
                            objectFit="cover"
                        ></Image>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Technology;
