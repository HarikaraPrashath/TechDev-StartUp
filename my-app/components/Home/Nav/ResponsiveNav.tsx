"use client";
import React, { useState } from "react";
import MobileNave from "./MobileNave";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openMenuHandler = () => setShowNav(true);
  const closeMenuHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openMenuHandler} />
      <MobileNave showNav={showNav} closeNav={closeMenuHandler} />
    </div>
  );
};

export default ResponsiveNav;
