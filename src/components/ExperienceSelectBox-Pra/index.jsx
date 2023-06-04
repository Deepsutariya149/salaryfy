import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import ExperienceSelectBox from "./ExperienceSelectBox";
import "./index.css";
import { useParams } from "react-router-dom";

const Index = () => {
  let { id } = useParams();
  return (
    <>
      <Navbar />
      <ExperienceSelectBox id={id}></ExperienceSelectBox>
      <Footer />
    </>
  );
};

export default Index;
