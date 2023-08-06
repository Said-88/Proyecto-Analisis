import  { useEffect } from "react";
import config from "./config.json";
import Quagga from "quagga";

export const BarCode = (props) => {
  const { onDetected } = props;

  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, "error msg");
      }
      Quagga.start();
      return () => {
        Quagga.stop()
      }
    });

    //detecting boxes on stream

    Quagga.onDetected(detected);
  });

  const detected = result => {
    onDetected(result.codeResult.code);
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};




