import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuOpen(isMenuOpen ? false : true);
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
            link: "/destination",
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
                    <Image
                        src="/assets/shared/logo.svg"
                        alt="Logo"
                        layout="fill"
                    ></Image>
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
        </header>
    );
};

export default Header;
