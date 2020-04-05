import React from "react";
import styled from "styled-components";
import Background from "../assets/Class/national-cancer-institute-N_aihp118p8-unsplash.jpg";
const Hero = () => {
  return (
    <Image>
      <Back />
    </Image>
  );
};

export default Hero;
const Image = styled.div``;
const Back = styled.div`
  background-image: url(${Background});
  height: 80vh;
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
/*   filter: brightness(50%);
 */`;
