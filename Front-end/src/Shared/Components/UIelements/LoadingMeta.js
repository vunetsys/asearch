import React , { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LoadingMeta = () => {
    var container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData : require('../../../assets/JSON/metaloader.json')
    })});

    return (
        <div>
            <div id="lottie" ref={container} className="animation"></div>
        </div>
    )
};

export default LoadingMeta;
