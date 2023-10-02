import LoginComponent from "@/components/ui/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University management-Login",
  description: "Login to the University",
};

const LoginPage = () => {
  return <LoginComponent />;
};

export default LoginPage;
