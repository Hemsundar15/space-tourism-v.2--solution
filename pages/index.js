import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const bgMobile = "bg-[url('../assets/home/background-home-mobile.jpg')]";
  const bgTablet = "md:bg-[url('../assets/home/background-home-tablet.jpg')]";
  const bgDesktop = "lg:bg-[url('../assets/home/background-home-desktop.jpg')]";

  return (
    <Fragment>
      <Head>
        <title>Home | Space Tourism</title>
      </Head>
      <section
        className={`${bgMobile} ${bgTablet} ${bgDesktop} bg-cover min-h-screen pt-[88px] py-12 flex flex-col justify-between md:pb-[90px] lg:pt-[240px] lg:flex-row lg:p-0`}
      >
        <div className="text-center text-light font-serif mt-6 px-6 flex flex-col items-center gap-y-4 md:gap-y-6 md:mt-[106px] lg:m-0 lg:text-left lg:items-start lg:p-0 lg:pl-[165px] lg:justify-center">
          <h2 className="font-sans text-[20px] md:text-[20px] text-primary lg:text-[28px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-[80px] leading-[100px] md:text-h1 md:leading-[150px]">
            SPACE
          </h1>
          <p className="text-primary max-w-[444px] font-sans text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 lg:m-0 lg:mr-[165px]">
          <Link href="/destination" passHref>
            <div className="w-[150px] aspect-square bg-light flex items-center justify-center rounded-full md:w-[242px] lg:w-[274px] lg:text-[32px]">
              <a
                href=""
                className="font-serif text-5 text-dark md:text-h4 tracking-[2px]"
              >
                EXPLORE
              </a>
            </div>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
