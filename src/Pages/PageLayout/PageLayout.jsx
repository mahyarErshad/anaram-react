import React from "react";
import HeaderWrapper from "../../Components/Header/HeaderWrapper/HeaderWrapper";
import FooterContainer from "../../Components/Footer/FooterContainer/FooterContainer";
import { Outlet } from "react-router-dom";

function PageLayout() {
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
