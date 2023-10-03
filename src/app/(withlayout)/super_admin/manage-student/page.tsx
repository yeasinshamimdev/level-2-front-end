"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { UserInfo } from "@/types";
import { Button } from "antd";
import Link from "next/link";

const ManageStudent = () => {
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
        <h1 style={{ marginBottom: "8px" }}>Manage Student</h1>
        <Link href={`/super_admin/manage-student/create`}>
          <Button type="primary">Create Student</Button>
        </Link>
      </div>
    </div>
  );
};

export default ManageStudent;
