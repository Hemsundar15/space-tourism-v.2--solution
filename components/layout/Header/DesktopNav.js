import Link from "next/link";
import styles from "./Header.module.css";

const DesktopNav = ({ navLinks }) => {
  return (
    <nav
      className={`${styles.nav} hidden bg-light/5 backdrop-blur-2xl h-full md:flex items-center px-12 gap-x-[37px] lg:gap-x-[50px] lg:pr-[165px] lg:pl-[125px]`}
    >
      {navLinks.map((navLink, index) => (
        <Link key={index} href={navLink.link}>
          <a
            href=""
            className={`${styles.navlink} font-sans tracking-[2.36px] text-light text-sb-2 lg:text-[16px]`}
          >
            <span className="hidden tracking-0 font-bold lg:inline mr-[10px]">
              {navLink.code}
            </span>
            {navLink.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
