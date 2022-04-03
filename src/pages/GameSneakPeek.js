import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../assets/images/slider/gamepay1 (1) (1).jpg';
import img3 from '../assets/images/slider/gameplay3 (2) (1).jpg';
import img4 from '../assets/images/slider/gameplay5 (1).jpg';
// import img5 from '../assets/images/slider/metamon-fight (1) (1).jpg';
import { Box, Heading, Image, Text, Flex, Grid } from '@chakra-ui/react';
import ReactImageZoom from 'react-image-zoom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function GameSneakPeek() {
  const settings = {
    slidesToShow: 1,
    arrows: true,
    autoplay: false,
    // autoplaySpeed: 2000,
    infinite: true,
    cssEase: 'ease',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // const images = [img2, img3, img4, img5, img2, img3, img4, img5];
  const images = [img2, img3, img4, img2, img3, img4];

  // const pp = {zoomWidth: 500}
  return (
    <div className="anamul-slider-wrapper">
      <div className="metamonInner ">
        <Box py="50px" className="anamul-slider">
          <h2 className="gameHeading anamul-heading">Game sneak peek</h2>
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box className="marquee-item1" key={index}>
                <TransformWrapper>
                  <TransformComponent>
                    <Image key={img} src={img} />
                  </TransformComponent>
                </TransformWrapper>
                {/* <Image key={img} src={img} /> */}
                {/* <ReactImageZoom img={img} zoomWidth="500" /> */}
              </Box>
            ))}
          </Slider>
          <h2 className="gameHeading mt-2 anamul-heading--h4">
            Welcome to metamon
          </h2>
        </Box>
      </div>
    </div>
  );
}

export default GameSneakPeek;
