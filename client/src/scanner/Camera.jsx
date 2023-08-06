import { useState } from "react";
import { BarCode } from "./BarCode";
import { Navbar } from "../components/Navbar";

export const Camera = () => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
  };
 
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container justify">
        <div className="flex items-center justify-center mb-8">
          <img src="src\assets\Banner USAP + 15mil Cursos Moodle-01 (1).png" alt="Imagen" className="w-full  h-96 rounded-lg mx-10" />
        </div>
        <div className="mb-8">
          <p className="text-xl">{result ? result : "Scanning..."}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => setCamera(!camera)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
          >
            {camera ? "Stop" : "Start"}
          </button>
          <div className="container">
            {camera && <BarCode onDetected={onDetected} />}
          </div>
        </div>
      </div>
    </div>
  );
};