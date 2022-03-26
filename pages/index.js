import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import mobileBackground from "../assets/home/background-home-mobile.jpg";

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home | Space Tourism</title>
            </Head>

            <section className="home">
                <div className="home__textbox">
                    <h2 className="heading--5">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="heading--1">SPACE</h1>
                    <p className="description">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="cta__holder">
                    <Link href="/destination" passHref>
                        <div className="cta--1">
                            <a className="heading--4">EXPLORE</a>
                        </div>
                    </Link>
                </div>

                <div style={{ zIndex: "-1" }}>
                    <Image
                        src={mobileBackground}
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
