import Head from "next/head";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { Auth } from "../../lib/endpoints";
import { useRouter } from "next/router";
import Prompt from "../../components/Prompt";

const Login = () => {
  const [authentication_property, setAuthenticationProperty] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [prompt_title, setPromptTitle] = useState("");
  const [prompt_body, setPromptBody] = useState("");
  const [link_to, setLinkTo] = useState("");
  const [link_text, setLinkText] = useState("");

  const handleClose = () => setShow(false);

  const callPrompt = (
    title: string,
    link: string,
    link_text: string,
    message: string
  ) => {
    if (show) setShow(false);
    setShow(true);
    setPromptTitle(title);
    setLinkText(link_text);
    setLinkTo(link);
    setPromptBody(message);
  };
  const router = useRouter();
  const authenticate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await new Auth().login(
        authentication_property,
        password
      );
      if (response.status === 200) {
        window.localStorage.setItem("cp-a", JSON.stringify(response.data));
        router.push("/blog");
      }
    } catch (err) {
      if (err.message === "Request failed with status code 401") {
        // bad credentials
        callPrompt(
          "Sign Up",
          "",
          "Close",
          "Please check your credentials and try again."
        );
      } else if (err.message === "Request failed with status code 404") {
        // bad endpoint
        callPrompt("Sign Up", "", "Close", "Request failed");
      } else if (err.message === "Network Error") {
        // bad network connection
        callPrompt(
          "Sign Up",
          "",
          "Close",
          "Please check your network connection and try again."
        );
      }
    }
  };

  useEffect(() => {
    var body = document.body;

    body.classList.add("parent");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js"
        ></script>
        <link rel="stylesheet" type="text/css" href="/login.css" />
      </Head>
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
      <div className="row">
        <div className="navbar">
          <img className="logo" src="/images/Logo.png" />
        </div>
      </div>
      <div className="content">
        <div style={{ textAlign: "center" }}>
          <div>
            <h3>
              <b>Login</b>
            </h3>
          </div>
          <br />
        </div>
        <div className="row">
          <form className="needs-validation" noValidate onSubmit={authenticate}>
            <div className="form-group">
              <label htmlFor="email">Email / Phone Number</label>
              <input
                type="email"
                className="form-control textbox"
                id="InputEmail"
                placeholder="Please enter a valid email or phone number"
                value={authentication_property}
                onChange={(e) => setAuthenticationProperty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <span>
                <input
                  type="password"
                  className="form-control textbox"
                  id="InputPassword1"
                  placeholder="Password must be at least 8 characters"
                  data-toggle="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <div>
                <a href="#" className="texthover">
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
      </div>

      <script type="text/javascript" src="/js/a.js"></script>
      <script
        src="https://kit.fontawesome.com/3303a2a495.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Login;