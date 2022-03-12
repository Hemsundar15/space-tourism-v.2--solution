import Link from "next/link";

const MobileNav = ({ navLinks, isMenuOpen }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "right-0" : "right-[-100%]"
      } absolute min-h-screen w-[255px] pl-8 pt-[118px] bg-dark top-0 flex flex-col gap-y-8 z-40 duration-300`}
    >
      {navLinks.map((navLink, index) => (
        <Link key={index} href={navLink.link}>
          <a href="" className="text-light">
            <span className="font-bold mr-[10px]">{navLink.code}</span>
            {navLink.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
