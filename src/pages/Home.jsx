import React from "react";
import Jumbotron from "@/components/Jumbotron";
import AboutSavvy from "@/components/AboutSavvy";
import FeatureSavvy from "@/components/FeatureSavvy";
import SavvyGuide from "@/components/SavvyGuide";
import Faq from "@/components/Faq";
import ProductDownload from "@/components/ProductDownload";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <AboutSavvy />
      <FeatureSavvy />
      <SavvyGuide />
      <Faq />
      <ProductDownload />
    </>
  );
};

export default Home;
