import React from "react";
import logo from "./assests/logo.png";
import navStyle from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className={navStyle.navMain}>
      <div>
        <Link href="/">
          <Image
            className={navStyle.logo}
            src={logo}
            alt="not foundd"
          />
        </Link>
      </div>
      <div>
        <button className={navStyle.launchapp}>LAUNCH APP</button>
      </div>
    </div>
  );
}

export default Navbar;
