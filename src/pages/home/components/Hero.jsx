import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "../styles/style.css";

const images = ["hero_image_1.jpg", "hero_image_2.jpg"];

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, id) => (
          <img
            key={id}
            src={require(`../../../assets/images/${image}`)}
            alt="Serra da Estrela"
            style={{ filter: "brightness(50%)" }}
          />
        ))}
      </Slider>
    </Box>
  );
};
