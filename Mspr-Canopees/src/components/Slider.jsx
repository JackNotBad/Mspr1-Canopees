import { useState, useEffect } from "react";

const images = [
  "./src/assets/slider/slide1.png",
  "./src/assets/slider/slide2.png",
  "./src/assets/slider/slide3.png",
  "./src/assets/slider/slide4.png",
  "./src/assets/slider/slide5.png",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative w-full lg:h-200 h-120 overflow-hidden">
        <img
          src={images[index]}
          alt="mutiple pictures of gardens"
          className="w-full h-full object-cover object-center"
        />
      </div>
  );
}