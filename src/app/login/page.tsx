"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login-image.png";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>Login your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <FormInput name="id" type="text" size="large" level="User Id" />
            </div>
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                level="User Password"
              />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                marginTop: "20px",
              }}
            >
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
