import Error from "@/components/icons/Error";
import { Row } from "antd";

const NotFound = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Error />
    </Row>
  );
};

export default NotFound;
