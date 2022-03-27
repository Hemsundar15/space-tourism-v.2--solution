import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNav = ({ navLinks }) => {
    const router = useRouter();

    return (
        <nav className={"nav--desktop"}>
            {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.link}>
                    <a
                        className={`navlink--desktop ${
                            router.pathname === navLink.link ? "active" : ""
                        }`}
                    >
                        <span>{navLink.code}</span>
                        {navLink.name}
                    </a>
                </Link>
            ))}
        </nav>
    );
};

export default DesktopNav;
