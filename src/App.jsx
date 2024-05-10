import Jumbotron from "./components/Jumbotron";
import AboutSavvy from "./components/AboutSavvy";
import FeatureSavvy from "./components/FeatureSavvy";
import SavvyGuide from "./components/SavvyGuide";
import Faq from "./components/Faq"
import React from "react";
import ProductDownload from "./components/ProductDownload";

function App() {
  return (
    <>
      <Jumbotron />
      <AboutSavvy />
      <FeatureSavvy />
      <SavvyGuide />
      <Faq/>
      <ProductDownload/>
    </>
  );
}

export default App;
