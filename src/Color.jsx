import React from "react";

import { useParams } from "react-router-dom";

const Color = () => {
  const params = useParams();

  const color = params.color;

  const styles = {
    backgroundColor: color,
    color: "white",
  };

  return <div style={styles}>{color}</div>;
};

export default Color;
