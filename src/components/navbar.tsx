import { RefObject, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu } from "../assets";
import { Navlink, navLinks } from "../constants/navlinks.contants";
import { styles } from "../styles";

const DefaultActive = navLinks[0];

interface NavbarProps {
  refs: RefObject<HTMLDivElement>[];
}

const Navbar: React.FC<NavbarProps> = ({ refs }) => {
  const [active, setActive] = useState(DefaultActive.title);
  const [toggle, setToggle] = useState(false);

  const scrollToSection = (title: string, navPos: number) => {
    setActive(title);
    const currentRef = refs[navPos];
    if (currentRef && currentRef.current) {
      currentRef.current.scrollIntoView();
    }
  };

  const goToSection = (posX: number, posY: number) => {
    window.scrollTo(posX, posY);
  };

  useLayoutEffect(() => {
    goToSection(0, 0);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(DefaultActive.title);
            goToSection(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Javier &nbsp;
            <span className="sm:block hidden"> | Desarrollador Senior</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: Navlink) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => scrollToSection(nav.title, nav.pos)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    scrollToSection(nav.title, nav.pos);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
