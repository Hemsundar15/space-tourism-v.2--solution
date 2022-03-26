import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../assets/shared/logo.svg";
import close from "../../../assets/shared/icon-close.svg";
import open from "../../../assets/shared/icon-hamburger.svg";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);

    const handleHamburgerClick = () => {
        setIsMenuOpen(isMenuOpen ? false : true);
        console.log("heay");
    };

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
        <header className="header">
            {/* Logo */}
            <Link href="/" passHref>
                <div className="header__logo">
                    <Image src={Logo} alt="Logo" layout="fill"></Image>
                </div>
            </Link>

            {/* Mobile Nav */}
            <MobileNav navLinks={navLinks} isMenuOpen={isMenuOpen}></MobileNav>

            <DesktopNav navLinks={navLinks}></DesktopNav>

            {/* Hamburger */}
            <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={handleHamburgerClick}
            >
                <div className="line line--1"></div>
                <div className="line line--2"></div>
                <div className="line line--3"></div>
            </div>
            {/* <button onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}>
                <div>
                    {isMenuOpen ? (
                        <Image src={close} alt="Close Hamburger"></Image>
                    ) : (
                        <Image src={open} alt="Open Hamburger"></Image>
                    )}
                </div>
            </button> */}
        </header>
    );
};

export default Header;
