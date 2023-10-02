"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login-image.png";

type FormValues = {
  id: string;
  password: string;
};

const LoginComponent = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        router.push("/profile");
      }
      setIsLoading(true);
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginComponent;
