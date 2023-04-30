import React, { useState, useEffect } from "react";
import HeaderWrapper from "../../Components/Header/HeaderWrapper/HeaderWrapper";
import FooterContainer from "../../Components/Footer/FooterContainer/FooterContainer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeaderWrapper isFixed={isFixed} />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
}

export default PageLayout;
