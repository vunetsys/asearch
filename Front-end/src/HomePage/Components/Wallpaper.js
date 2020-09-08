import React from "react";
import "./Wallpaper.css";
import BG from "../../assets/images/Absurd-Illustrations/PNG/08.png";
import BG1 from "../../assets/images/Absurd-Illustrations/PNG/09.png";
import BG2 from "../../assets/images/Absurd-Illustrations/PNG/05.png";
import BG3 from "../../assets/images/Absurd-Illustrations/PNG/07.png";

const randomPicture = () => {
    let myArray = [BG,BG1,BG2,BG3]; 
    var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem;
}

const Background = (props) => {
  return (
    <div>
      <img className="BG" alt="abstract" src={randomPicture()}></img>
      <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FA4D56"
          d="M44.1,-76.7C56.5,-69.2,65.6,-56.2,71,-42.5C76.3,-28.8,77.9,-14.4,78,0C78,14.5,76.6,28.9,71,42.1C65.3,55.2,55.4,67.1,42.9,74.5C30.4,81.9,15.2,84.9,-0.2,85.4C-15.7,85.8,-31.4,83.6,-45.3,77.1C-59.3,70.5,-71.6,59.4,-76.6,45.8C-81.7,32.3,-79.6,16.1,-76.7,1.6C-73.9,-12.9,-70.3,-25.7,-64.3,-37.6C-58.2,-49.5,-49.7,-60.4,-38.6,-68.6C-27.4,-76.9,-13.7,-82.5,1,-84.3C15.8,-86.1,31.6,-84.2,44.1,-76.7Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg className="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FA4D56"
          d="M44.1,-76.7C56.5,-69.2,65.6,-56.2,71,-42.5C76.3,-28.8,77.9,-14.4,78,0C78,14.5,76.6,28.9,71,42.1C65.3,55.2,55.4,67.1,42.9,74.5C30.4,81.9,15.2,84.9,-0.2,85.4C-15.7,85.8,-31.4,83.6,-45.3,77.1C-59.3,70.5,-71.6,59.4,-76.6,45.8C-81.7,32.3,-79.6,16.1,-76.7,1.6C-73.9,-12.9,-70.3,-25.7,-64.3,-37.6C-58.2,-49.5,-49.7,-60.4,-38.6,-68.6C-27.4,-76.9,-13.7,-82.5,1,-84.3C15.8,-86.1,31.6,-84.2,44.1,-76.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Background;
