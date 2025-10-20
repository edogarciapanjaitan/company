'use client'

import { useState, useEffect} from  "react"
import Image from "next/image";

const images = [
    'assets/1.jpg',
    'assets/2.jpg',
    'assets/4.jpg',
];

const AutoBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, []);
};

export default AutoBackground;

