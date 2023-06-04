import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import NTDBox from "./NTDBox";
import "./index.css";

const Index = () => {
  return (
    <>
      <Navbar />
      <NTDBox></NTDBox>
      <Footer />
    </>
  );
};

export default Index;
