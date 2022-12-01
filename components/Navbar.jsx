import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";
// import logo from '../public/images/logo.jpg'

const MENU_LIST = [
  // { text: "Main", href: "/" },
  { text: "Buy", href: "/buyHomes" },
  { text: "Rent", href: "/rentHomes" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>

        <div className="image"></div>
        {/* <Image
        src={logo}
        alt="Picture of the author"
        width={90} 
        height={90}
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /> */}
            
          
        </Link>
        <h1 className="logo">Tuluminati X</h1>
        
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;