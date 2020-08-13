import React, { useState, useEffect, useRef, useCallback } from 'react';
import bear1 from '../images/bear-1.jpg';
import bear2 from '../images/bear-2.jpg';
import eagle1 from '../images/eagle-1.jpg';
import eagle2 from '../images/eagle-2.jpg';
import seal1 from '../images/seal-1.jpg';
import whale2 from '../images/whale-2.jpg';
import whale3 from '../images/whale-3.jpg';
import whale4 from '../images/whale-4.jpg';
import whale5 from '../images/whale-5.jpg';
import whale6 from '../images/whale-6.jpg';
import whale7 from '../images/whale-7.jpg';
import whale1 from '../images/whale-1.jpg';


const ImageGridComponent = () => {
  const allImages = [
      bear1,
      bear2,
      eagle1,
      eagle2,
      seal1,
      whale2,
      whale3,
      whale4,
      whale5,
      whale6,
      whale7,
      whale1,
  ];

  const [currentImages, setCurrentImages] = useState([]);

  const freeImages = useRef(allImages);

  useEffect(() => {

    if(freeImages.current.length === 0) {
      let difference = allImages.filter(n => !currentImages.includes(n));
      freeImages.current = difference;
    }

    if(currentImages.length === 0) {
      let initImageArr = [];
      for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * allImages.length);
        initImageArr.push(allImages[num]);
        freeImages.current.splice(num, 1);
      }
      setCurrentImages(initImageArr);

    } else {
      const interval = setInterval(() => {
        let randIndex = Math.floor(Math.random() * currentImages.length);
        let updatedImageArr = currentImages;

        for (let i = 0; i < updatedImageArr.length - 1; i++) {
          if(i === randIndex) {
            let num = Math.floor(Math.random() * freeImages.current.length);
            updatedImageArr[randIndex] = freeImages.current[num];
            freeImages.current.splice(num, 1);
          }
        }
        setCurrentImages([...updatedImageArr]);

      }, 3000);
      return () => clearInterval(interval);

    }
  }, [currentImages.join(',')]);


  return (
    <div className="image-grid-container">
      {currentImages.map((image, index) => {
          if(index < 6) {
            return (
                  <img key={index} src={image} className='image-grid-item' alt='home grid'/>
              )
          } else {
              return null;
          }
      })}
      <div className="clearDiv"></div>
    </div>
  );
};

export default ImageGridComponent;