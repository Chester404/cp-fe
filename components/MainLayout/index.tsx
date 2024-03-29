import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

const verifyLogin = (
  router: NextRouter
): { verified: boolean; path: string } => {
  let lStorage = window.localStorage.getItem("cp-a");
  lStorage = JSON.parse(lStorage);
  if (lStorage == null || lStorage == undefined) {
    if (router.pathname.includes("/blog")) {
      return { verified: false, path: "" };
    }
    if (router.pathname.includes("/profile")) {
      return { verified: false, path: "" };
    }
    if (router.pathname === "/editprofile") {
      return { verified: false, path: "" };
    }
    if (router.pathname === "/memberlist") {
      return { verified: true, path: "" };
    }
    if (router.pathname === "/") {
      return { verified: false, path: "" };
    }
    // if (router.pathname.includes("/auth/verificationcode")) {
    // }
    // if (router.pathname.includes("/auth/verificationcode")) {
    // }
  }
  return { verified: true, path: "" };
};

const MainLayout = ({
  children,
  title = "Community Project",
  pageTitle = "",
}) => {
  const router = useRouter();
  useEffect(() => {
    const rs = verifyLogin(router);
    if (!rs.verified) {
      router.push("/");
    } else if (router.pathname === "/") {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Header title={title} />
      <div className="page">
        <div className="page-main">
          <Navbar />
          <div className="container content-area">{children}</div>
        </div>
      </div>
      {/*<Footer /> */}
    </>
  );
};

export default MainLayout;
