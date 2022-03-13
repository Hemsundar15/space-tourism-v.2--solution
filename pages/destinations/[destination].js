import { useState } from "react";
import data from "../../data/data.json";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";

const bgMobile = "bg-[url('../assets/home/background-home-mobile.jpg')]";
const bgTablet = "md:bg-[url('../assets/home/background-home-tablet.jpg')]";
const bgDesktop = "lg:bg-[url('../assets/home/background-home-desktop.jpg')]";

const Destination = (props) => {
  const [num, setNum] = useState(0);

  const router = useRouter();
  let destinationPath = router.asPath.split("/")[2];

  const destinationNames = ["moon", "mars", "europa", "titan"];
  const destinationDetails =
    props.destinationDetails[destinationNames.indexOf(destinationPath)];
  console.log(destinationDetails);

  return (
    <main className={`${bgMobile} min-h-screen bg-cover pt-[88px]`}>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-[16px] text-light">
          <span className="mr-[18px] text-light/50">01</span> PICK YOUR
          DESTINATION
        </h1>

        <div className="w-[170px] aspect-square">
          <Image
            src={require(`../../assets/destination/image-${destinationPath}.webp`)}
            alt={`${destinationPath.toUpperCase()} image`}
            priority="preload"
          ></Image>
        </div>
      </div>
      <div className="px-6 mt-[26px] flex flex-col items-center">
        <nav className="flex gap-x-[26px]">
          {["MOON", "MARS", "EUROPA", "TITAN"].map((name, index) => (
            <Link key={index} href={`${name.toLowerCase()}`}>
              <a className="text-[14px] text-primary">{name}</a>
            </Link>
          ))}
        </nav>
        <h1 className="text-light font-serif text-[56px]">
          {destinationPath.toUpperCase()}
        </h1>
        <p className="text-primary text-[15px] leading-[25px] text-center">
          {destinationDetails.description}
        </p>
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          destination: "moon",
        },
      },
      {
        params: {
          destination: "mars",
        },
      },
      {
        params: {
          destination: "europa",
        },
      },
      {
        params: {
          destination: "titan",
        },
      },
    ],
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      destinationDetails: data.destinations,
    },
  };
};

export default Destination;
