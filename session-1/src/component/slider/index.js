import React from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

const Slider = () => (
  <>
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div object="true" data-src="../../assets/img/slider/1.jpg" />
      <div object="true" data-src="../../assets/img/slider/2.jpg" />
      <div object="true" data-src="../../assets/img/slider/3.jpg" />
    </AwesomeSlider>
  </>
);

export default Slider;
