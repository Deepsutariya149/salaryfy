import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import JobSwitchBox from "./JobSwitchBox";
import "./index.css";
import { useParams } from "react-router-dom";
const Index = () => {
  let { id } = useParams();
  return (
    <>
      <Navbar />
      <JobSwitchBox id={id}></JobSwitchBox>
      <Footer />
    </>
  );
};

export default Index;
