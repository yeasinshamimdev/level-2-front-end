"use client";

import { authKey } from "@/constants/storageKey";
import {
  getUserInfo,
  isUserLoggedIn,
  removeUserInfo,
} from "@/services/auth.service";
import { UserInfo } from "@/types";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const { Header: AntHeader } = Layout;

const HeaderPage = () => {
  const loggedIn = isUserLoggedIn();
  const user = getUserInfo() as UserInfo;
  const router = useRouter();

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="text" danger onClick={logout}>
          Logout
        </Button>
      ),
    },
  ];

  useEffect(() => {
    if (!loggedIn) router.push("/login");
  }, [loggedIn, router]);

  return (
    <AntHeader style={{ background: "#fff" }}>
      <Row justify={"end"} align={"middle"}>
        <p style={{ marginRight: "5px" }}>{user?.role as string}</p>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Space wrap size={16}>
            <Avatar
              size={48}
              style={{ cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default HeaderPage;
