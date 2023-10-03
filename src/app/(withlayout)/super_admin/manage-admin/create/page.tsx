"use client";

import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormTextArea from "@/components/forms/TextAreaField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroupOptions,
  genderOptions,
  managementDepartmentOptions,
} from "@/constants/global";
import { Button, Col, Row } from "antd";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            level: `super_admin`,
            link: `/super_admin`,
          },
          {
            level: `admin`,
            link: `/super_admin/manage-admin`,
          },
        ]}
      />
      <h1 style={{ marginBottom: "8px" }}>Create a Admin</h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Admin Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.name.firstName"
                size="large"
                level="First name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.name.middleName"
                size="large"
                level="Middle name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.name.lastName"
                size="large"
                level="Last name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="password"
                name="password"
                size="large"
                level="Password"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormSelectField
                placeholder="Select Gender"
                options={genderOptions}
                name="admin.gender"
                size="large"
                level="Gender"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormSelectField
                placeholder="Select department"
                options={managementDepartmentOptions}
                name="admin.managementDepartment"
                size="large"
                level="Department"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <UploadImage />
            </Col>
          </Row>
        </div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Basic Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="email"
                name="admin.email"
                size="large"
                level="Email"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.contactNo"
                size="large"
                level="Contact No"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.emergencyContactNo"
                size="large"
                level="Emergency Contact No."
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormDatePicker
                size="large"
                name="admin.dateOfBirth"
                level="Date of birth"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormSelectField
                placeholder="Select Blood Group"
                options={bloodGroupOptions}
                name="admin.bloodGroup"
                size="large"
                level="Blood Group"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormInput
                type="text"
                name="admin.designation"
                size="large"
                level="Designation"
              />
            </Col>

            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormTextArea
                rows={4}
                name="admin.presentAddress"
                level="Present Address"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ marginBottom: "8px" }}
            >
              <FormTextArea
                rows={4}
                name="admin.permanentAddress"
                level="Permanent Address"
              />
            </Col>
          </Row>
        </div>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdminPage;
