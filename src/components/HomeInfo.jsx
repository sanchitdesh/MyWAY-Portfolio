import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="" />
    </Link>
  </div>
);
const renderContext = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
  neo-brutalism-blue py-4 px-8 text-white mx-5 
  "
    >
      Hi, I am <span className="font-semibold">Sanchit</span>👋
      <br />A Software Engineer from Capgemini, India.
    </h1>
  ),

  2: (
    <InfoBox
      text="Working with Capgemini from past 2 years and have upgraded so many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="Part of a projects to a success over the years. Curious about the impact?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContext[currentStage] || null;
};

export default HomeInfo;
