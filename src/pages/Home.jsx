import React from "react";
import Jumbotron from "@/components/Jumbotron";
import AboutSavvy from "@/components/AboutSavvy";
import FeatureSavvy from "@/components/FeatureSavvy";
import SavvyGuide from "@/components/SavvyGuide";
import Faq from "@/components/Faq";
import ProductDownload from "@/components/ProductDownload";
import Team from "../components/Team";

const Home = () => {
  return (
    <section className="overflow-auto">
      <Jumbotron />
      <AboutSavvy />
      <FeatureSavvy />
      <SavvyGuide />
      <Faq />
      <ProductDownload />
    </section>
  );
};

export default Home;
