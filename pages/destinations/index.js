import { useEffect } from "react";
import { Image } from "next/image";
import { useRouter } from "next/router";

import data from "../../data/data.json";
const destinationData = data.destinations;

const Destination = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/destinations/moon");
  }, [router]);

  return null;
};

export default Destination;
