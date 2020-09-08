import React from "react";
import "../../Shared/Typography/typography.css";
import "./MainTitle.css";
import Fade from "react-reveal/Fade";

const MainTitle = () => {
  return (
    <div className="main-title mb-10 b-5">
      <Fade top>
        <h1>An academic venue search engine for Computer Scientists.</h1>
      </Fade>
    </div>
  );
};

export default MainTitle;
