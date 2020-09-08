import React , { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  
  var container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData : require('../../../assets/JSON/loading.json')
    });
  });

  return (
    <div id="lottie" ref={container} className="animation"></div>
  );
};

export default LoadingSpinner;
