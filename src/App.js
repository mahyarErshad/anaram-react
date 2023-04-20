import React from "react";
import HeaderWrapper from "./Components/Header/HeaderWrapper/HeaderWrapper";
import FooterContainer from "./Components/Footer/FooterContainer/FooterContainer";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
      <HeaderWrapper />
      <Routes />
      <FooterContainer />
    </>
  );
}

export default App;
