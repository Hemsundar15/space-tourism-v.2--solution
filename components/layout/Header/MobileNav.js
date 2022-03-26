import Link from "next/link";

const MobileNav = ({ navLinks, isMenuOpen }) => {
    return (
        <nav className={`nav--mobile ${isMenuOpen ? "active" : ""}`}>
            {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.link}>
                    <a className="navlink--mobile">
                        <span>{navLink.code}</span>
                        {navLink.name}
                    </a>
                </Link>
            ))}
        </nav>
    );
};

export default MobileNav;
