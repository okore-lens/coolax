import { useState, useEffect } from "react";
import banner1 from "../assets/slider/banner1.jpg";
import banner2 from "../assets/slider/banner2.jpg";
import banner3 from "../assets/slider/banner3.jpg";
import banner4 from "../assets/slider/banner4.jpg";
import banner5 from "../assets/slider/banner5.jpg";
import banner6 from "../assets/slider/banner6.jpg";
import banner7 from "../assets/slider/banner7.jpg";

const Slideshow = () => {
  const [poster, setPoster] = useState(0);
  const imgArray = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
  ];

  const interval = () => {
    let count = poster;
    setInterval(() => {
      if (count >= 0) {
        if (count > imgArray.length - 1) {
          setPoster(0);
          count = 1;

          return;
        }
        setPoster(count++);
      }
    }, 3000);
  };

  // let counter = poster + 1;

  useEffect(() => {
    interval();
  }, []);

  return (
    <div className="slideshow">
      <img src={imgArray[poster]} alt="Image Banner" />
    </div>
  );
};

export default Slideshow;
