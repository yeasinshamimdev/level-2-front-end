"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { UserInfo } from "@/types";
import { Button } from "antd";
import Link from "next/link";

const ManageAdmin = () => {
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
        <ActionBar title="Admin List">
          <Link href={`/super_admin/manage-admin/create`}>
            <Button type="primary">Create Admin</Button>
          </Link>
        </ActionBar>
      </div>
    </div>
  );
};

export default ManageAdmin;
