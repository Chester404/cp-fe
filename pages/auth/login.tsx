import Head from "next/head";
import Link from "next/link";
import { useState, FormEvent, useEffect, useContext } from "react";
import { Auth, Users } from "../../lib/endpoints";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";
import MainLayout from "../../components/MainLayout";
import { Store } from "../../contextStore";
const Login = () => {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");
  const [togglepasswordeye, setTogglePasswordeye] = useState(false);
  const { dispatch } = useContext(Store);
  const router = useRouter();
  const userProfile = (userInfo) => {
    window.localStorage.setItem("user-profile", JSON.stringify(userInfo));
    dispatch({
      type: "SET_USERINFO",
      payload: userInfo,
    });
  };
  const handleClose = () => setShow(false);
  const callPrompt = (
    title: string,
    link: string,
    link_text: string,
    message: string
  ) => {
    setShow(true);
    setPromptTitle(title);
    setLinkText(link_text);
    setLinkTo(link);
    setPromptBody(message);
  };
  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    let userInfo: any = {};
    callPrompt("Login", "", "", "Please wait...");
    try {
      const response = await new Auth().login(
        authentication_property,
        password
      );
        console.log(response);
      if (response.user) {
        window.localStorage.setItem("cp-a", JSON.stringify(response));
        if (response.user.is_staff) {
          userInfo = await new Users().getAdminProfile();
        } else {
          if(response.user.is_organization) {
            userInfo = await new Users().getBusinessProfile();
          } else {
            userInfo = await new Users().getUserProfile();
          }
        }
        userProfile(userInfo);
        setShow(false);
        if (response.user.is_staff) {
          router.push("/userList");
        } else {
          if (response.user.is_organization) 
            router.push("/businessprofile"); 
            else 
            router.push("/blog");
        }
      } else {
        callPrompt("Login", "", "Close", "No active account found with the given credentials.");
      }
    } catch (err) {
      console.log(err);
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        callPrompt(
          "Login",
          "",
          "Close",
          "Please check your credentials and try again."
        );
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        callPrompt("Login", "", "Close", "Request failed");
      } else if (err.message === "Network Error") {
        // bad network connection
        callPrompt(
          "Login",
          "",
          "Close",
          "Please check your network connection and try again."
        );
      } else {
        callPrompt("Login", "", "Close", "Login failed.");
      }
    }
  };
  return (
    <>
      <MainLayout>
        <Prompt
          title={prompt_title}
          linkTo={link_to}
          linkText={link_text}
          show={show}
          success={link_to.length > 0 ? true : false}
          handleClose={handleClose}
        >
          <p>{prompt_body}</p>
        </Prompt>
        <div className="logincontent">
          <div className="loginborder">
            <h3>
              <b>Login</b>
            </h3>
            <br />
          </div>
          <form className="needs-validation" noValidate onSubmit={authenticate}>
            <div className="form-group">
              <label htmlFor="InputEmail" className="formlabel">
                Email
              </label>
              <input
                type="email"
                className="form-control form-rounded"
                id="InputEmail"
                placeholder="Please enter a valid email"
                value={authentication_property}
                onChange={(e) => setAuthenticationProperty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1" className="formlabel">
                Password
              </label>
              <div
                className="input-group "
                id="show_hide_password"
              >
                <input
                  type={togglepasswordeye ? "text" : "password"}
                  className="form-control form-rounded"
                  id="InputPassword1"
                  placeholder="Password must be at least 8 characters"
                  data-toggle="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-addon">
                  <a href="#">
                    <i
                      className={`${
                        togglepasswordeye ? "fe fe-eye" : "fe fe-eye-off"
                      }`}
                      onClick={() => setTogglePasswordeye(!togglepasswordeye)}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="center">
              <button
                type="submit"
                id="signin_button"
                className="btn btn-primary btn-block authbtn"
              >
                Login
              </button>
            </div>
            <br />
            <div className="center">
              <div>
                <a href="/auth/forgottenpassword" className="texthover">
                  Forgot Password?
                </a>
              </div>
              <br />
              <div>
                Don't have an account?{" "}
                <Link href="/auth/signup">
                  <a className="signuptext">
                    <b>Sign Up</b>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MainLayout>
    </>
  );
};
export default Login;