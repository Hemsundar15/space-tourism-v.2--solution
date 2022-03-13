import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

import Logo from "../../../assets/shared/logo.svg";
import close from "../../../assets/shared/icon-close.svg";
import open from "../../../assets/shared/icon-hamburger.svg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      code: "00",
      name: "HOME",
      link: "/",
    },
    {
      code: "01",
      name: "DESTINATION",
      link: "/destinations",
    },
    {
      code: "02",
      name: "CREW",
      link: "/crew",
    },
    {
      code: "03",
      name: "TECHNOLOGY",
      link: "/technology",
    },
  ];

  return (
    <header
      className={`${styles.header} fixed h-[88px] w-full px-6 flex items-center justify-between z-40 md:h-24 md:px-0 lg:mt-10`}
    >
      {/* Logo */}
      <Link href="/" passHref>
        <div className="w-10 aspect-square relative z-50 md:ml-[39px] md:w-12 lg:ml-[55px]">
          <Image src={Logo} alt="Logo" layout="fill"></Image>
        </div>
      </Link>

      {/* Mobile Nav */}
      <MobileNav navLinks={navLinks} isMenuOpen={isMenuOpen}></MobileNav>

      <DesktopNav navLinks={navLinks}></DesktopNav>

      {/* Hamburger */}
      <button
        onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
        className="z-50 md:hidden"
      >
        <div>
          {isMenuOpen ? (
            <Image src={close} alt="Close Hamburger"></Image>
          ) : (
            <Image src={open} alt="Open Hamburger"></Image>
          )}
        </div>
      </button>
    </header>
  );
};

export default Header;
