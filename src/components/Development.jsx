import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  left: 100px;

  @media only screen and (max-width: 768px) {
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        ما محصولاتی را با تمرکز قوی بر روی طراحی کلاس جهانی و اطمینان از موفقیت
        محصول شما در بازار
      </Desc>
    </>
  );
};

export default Development;
