import React from "react";
import { Image } from "antd";
const CustomImage = ({ src, width = 200, height, className }) => (
  <Image width={width} height={height} src={src} className={className} />
);
export default CustomImage;
