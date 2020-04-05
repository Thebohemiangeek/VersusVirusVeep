import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <div>
      <Text>Our system</Text>
      <Content>
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
          officiis impedit exercitationem aperiam culpa repudiandae, architecto
          fugiat cumque dignissimos perferendis rerum eum aliquid assumenda
          consequatur aspernatur accusantium adipisci rem quasi!
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          provident asperiores quisquam voluptatum dolorem. Hic animi asperiores
          quibusdam eum recusandae, similique obcaecati dolore, porro saepe
          consequuntur, ad reprehenderit voluptatibus voluptas!
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          at qui quisquam sed maiores, rerum pariatur accusantium cum voluptates
          nihil ut aperiam nobis, suscipit dicta itaque obcaecati omnis culpa
          magnam.
        </p>
      </Content>
    </div>
  );
};

export default About;
const Text = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-top: -2rem;
  font-size: 3rem;
`;
const Content = styled.div`
  text-align: justify;
  margin: 5% auto;

  width: 80%;
`;
