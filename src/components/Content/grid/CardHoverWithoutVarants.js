import React from "react";
import { CardBox, IconBox } from "./Styles";

const IconVariants = {
  beforeHover: {
    opacity: 0,
    y: -50,
  },
  onHover: {
    opacity: 1,
    y: 0,
    scale: 1.5,
    transition: {
      type: "tween",
    },
  },
};

const Card = ({ icon }) => {
  console.log(icon);
  return (
    <CardBox whileHover={{ scale: 1.1 }}>
      <IconBox
        initial="beforeHover"
        variants={IconVariants}
        whileHover="onHover"
      >
        {icon}
      </IconBox>
    </CardBox>
  );
};

export default Card;