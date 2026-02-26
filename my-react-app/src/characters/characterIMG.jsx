import React, {useState} from 'react';

// SFX
import {useWithSound} from '../components/alertSFX'
import alertMP3 from '../sfx/alert.mp3'
// Seems as though relative path for images vs. imports are different

import characters from "./characterSTORY.json"

const Carousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

    const LeftArrow = () => {
    const {playSound} = useWithSound(alertMP3)
    const handleButtonClick=()=>{
        playSound();
        prevSlide();
    }
    return(
        <button onClick={handleButtonClick} className="arrow-BG"><div className="arrow-left"></div></button>
    )
    }

    const RightArrow = () => {
    const {playSound} = useWithSound(alertMP3)
    const handleButtonClick=()=>{
        playSound();
        nextSlide();
    }
    return(
        <button onClick={handleButtonClick} className="arrow-BG"><div className="arrow-right"></div></button>
    )
    }
  return(
    <>
        <div className='characters'>
            <div className='carousel'>
                <LeftArrow/>
                <img
                    className="characterIMG"
                    src={images[activeIndex]}
                    alt={`Slide ${activeIndex}`}
                ></img>
                <RightArrow/>
            </div>
            <p className="characterSTORY">{characters["characters"][activeIndex]["description"]}</p>
        </div>
    </>
  );
}

export default function characterIMG(){
    
  // IMGS
    const images = [
        'src/imgs/solidSnake.png',
    'src/imgs/royCampbell.png',
    'src/imgs/meiLing.png'
    ];
    console.log(characters["characters"][0]["description"])
    return(
        <>
            <Carousel images={images} />
        </>
    )
}
