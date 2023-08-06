import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "./Navbar";
import { Events } from "./Events";
import { Footer } from "./Footer";

export const HomeEvents = () => {
  const { user, loading } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "src/assets/Banner-Moodle-TALLER-KNIME-1320x600.png",
    "src/assets/Banner-Moodle-E-COMMERCE-1320x600.png",
    "src/assets/Banner-Moodle-45-aniversario-USAP.png",
  ];


  useEffect(() => {
    const changeSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeSlide, 3000);

    return () => clearInterval(interval);
  },);


  useEffect(() => {
    const changeSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const interval = setInterval(changeSlide, 3000);

    return () => clearInterval(interval);
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="bg-white relative">
        <div>
          <Navbar />
        </div>

        <div className="container mx-auto mt-10">
          <div className="relative">
            <div className="h-[65vh] bg-gray-200 rounded-lg" style={{ zIndex: 0 }}>
              {/* Use the current index to display the current image */}
              {images.map((image, index) => (
                <img
                  key={index}

                  className={`transition-all duration-500 rounded-lg ${


                    index === currentIndex ? "opacity-100" : "opacity-0"
                  } absolute top-0 left-0 w-full h-full`}
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2 mt-4">
            Próximos Eventos. . . .
          </h2>
          <div className="md:flex mt-4 ">
            <div className="mr-3 ml-3 "> 
            <Events/>
            </div>
        </div>
        </div>
        {/* <div className="mt-4" style={{ zIndex: 1 }}>
          <h1>Welcome {user.displayName || user.email}</h1>
        </div> */}
        <Footer />
      </div>
    </>
  );
};
