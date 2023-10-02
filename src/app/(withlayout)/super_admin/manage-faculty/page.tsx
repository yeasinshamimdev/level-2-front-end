"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { UserInfo } from "@/types";
import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
  const { role } = getUserInfo() as UserInfo;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            level: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <div
        style={{
          paddingTop: "10px",
        }}
      >
        <h1 style={{ marginBottom: "8px" }}>Faculty List</h1>
        <Link href={`${role}/manage-faculty/create`}>
          <Button type="primary">Create Faculty</Button>
        </Link>
      </div>
    </div>
  );
};

export default ManageFaculty;
