"use client";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};

export default Spinner;
