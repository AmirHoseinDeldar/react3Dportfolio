import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 44px;

  @media only screen and (max-width: 890px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 890px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title> خارج از فضای مربع فکر کنید</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>من کی هستم؟</Subtitle>
          </WhatWeDo>
          <Desc>یک گروه خلاق از طراحان و توسعه دهندگان با اشتیاق به هنرها</Desc>
          <Button>دیدن کارهای من</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
