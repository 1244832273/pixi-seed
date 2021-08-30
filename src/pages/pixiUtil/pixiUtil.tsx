/*
 * @Author: 鲁田文
 * @Date: 2021-08-30 09:43:22
 * @LastEditTime: 2021-08-30 11:56:23
 * @LastEditors: 鲁田文
 * @Description: 
 */
import React, { useEffect, useState } from 'react'
import {  } from "pixi.js";
import { Stage, Container, Sprite, SimpleMesh } from '@inlet/react-pixi';
import mapBg1 from "../../img/mapBg1.png";

const PixiUtil = () => {
  const [animPosition, setAnimPosition] = useState({
    x: 12,
    y: 12
  });

  useEffect(() => {
    return () => {};
  }, []);


  return (
    <Stage width={1920} height={1285} options={{ backgroundColor: 0xeef1f5 }}>
      <Container>
        <Sprite
          width={1920}
          height={1285}
          image={mapBg1}
        />
        <Sprite
          image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          {...animPosition}
        />
      </Container>
    </Stage>
  );
}

export default PixiUtil;

