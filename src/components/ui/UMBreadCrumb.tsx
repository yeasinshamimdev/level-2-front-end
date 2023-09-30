import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";

const UMBreadCrumb = ({
  items,
}: {
  items: {
    level: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href={"/"}>
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.level}</Link>
        ) : (
          <span>{item.level}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems}></Breadcrumb>;
};

export default UMBreadCrumb;
