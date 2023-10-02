"use client";

import { Layout } from "antd";
import HeaderPage from "./Header";
import UMBreadCrumb from "./UMBreadCrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <HeaderPage />
      <UMBreadCrumb
        items={[
          {
            level: `${base}`,
            link: `/${base}`,
          },
          {
            level: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
