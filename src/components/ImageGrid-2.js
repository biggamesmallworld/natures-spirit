import React, { useState, useEffect } from 'react';
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


const ImageGridAlt = () => {
  const [allImages, setAllImages] = useState([
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
  ]);

  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      let randIndex = Math.floor(Math.random() * currentImages.length);
      let randImage = allImages[Math.floor(Math.random() * currentImages.length)];
      //this.setState(currentImages[randIndex]: randImage);

      // 1. Make a shallow copy of the items
      let images = [currentImages];
      // 2. Make a shallow copy of the item you want to mutate
      let item = {...images[randIndex]};
      // 3. Replace the property you're intested in
      item = randImage;
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      images[randIndex] = item;

      // 5. Set the state to our new copy
      setCurrentImages({images});
      // reset images and variables
      images = [];
      item = null;
      return null;
    }, 3000);
  }, []);

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

export default ImageGridAlt;