"use client";

import { Row } from "antd";

const Error = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <h1 style={{ color: "red" }}>Something went wrong!!</h1>
    </Row>
  );
};

export default Error;
