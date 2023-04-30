import React, { useState, useEffect } from "react";
import HeaderWrapper from "../../Components/Header/HeaderWrapper/HeaderWrapper";
import FooterContainer from "../../Components/Footer/FooterContainer/FooterContainer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // eslint-disable-next-line
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 600) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  console.log(sticky);
  return (
    <>
      <HeaderWrapper />
      <main>
        <Outlet />
      </main>
      <FooterContainer />
    </>
  );
}

export default PageLayout;
