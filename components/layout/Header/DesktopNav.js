import Link from "next/link";

const DesktopNav = ({ navLinks }) => {
    return (
        <nav className={"nav--desktop"}>
            {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.link}>
                    <a href="">
                        <span>{navLink.code}</span>
                        {navLink.name}
                    </a>
                </Link>
            ))}
        </nav>
    );
};

export default DesktopNav;
