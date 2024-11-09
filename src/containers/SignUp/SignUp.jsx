// import { login, register } from "Redux/Actions/UserActions";
import { Button } from "components/Button";
import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "components/Input";
import { Switch } from "antd";

const Wrapper = styled.div`
  background-color: var(--background-signin-color);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    color: white;
  }
  .input_group {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
  }
  .input {
    position: relative;
    box-shadow: var(--box-shadow-1);

    box-shadow: var(--box-shadow-2);
  }

  .btn-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-signin {
    font-weight: 700;
    font-size: 22px;
    box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040;
    cursor: pointer;
    margin-top: 30px;
  }
  .btn-signup {
    font-weight: 700;
    font-size: 22px;
    box-shadow: var(--box-shadow-check), 0px 4px 4px 0px #00000040;
    /* box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040; */
    cursor: pointer;
    /* margin-top: 30px; */
  }
  .policy {
    margin-top: 10px;
    color: var(--bg-color-input);
    text-align: center;
  }
  .error-text {
    color: red;
    font-size: 12px;
  }
`;
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validUsername, setValidUsername] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);

  const dispatch = useDispatch();
//   const userRegister = useSelector((state) => state.userRegister);
  const [signUpClicked, setSignUpClicked] = useState(false);

//   const { error, loading, userInfo } = userRegister;
  const handleSignUpClick = () => {
    setSignUpClicked(true);
  };
  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);

    // Check if the password matches the confirmation
    if (confirmPassword === password) {
      setValidConfirmPassword(true);
    } else {
      setValidConfirmPassword(false);
    }
  };
  function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Kiểm tra định dạng email bằng biểu thức chính quy
    if (pattern.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  function validatePassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (pattern.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-mode", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-mode", "light");
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) setDarkMode();
    else setLightMode();
  };
//   useEffect(() => {

//     if (userInfo) {
//       navigate("/");
//     }
//   }, [userInfo, navigate]);
  //submit
  const signUp = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const formData = {
      username: username,
      password: password,
      email: email,
    };
    const token = await dispatch.user.signUp(formData);
    nav(token);
  };

  const nav = (token) => {
    if (token) {
        alert("SIGNUP Success!");
        navigate("/login");
    } else {
        alert("SIGNUP Fail!");
    }
  }
  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    // Kiểm tra định dạng email và cập nhật trạng thái hợp lệ
    if (validateEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    // Kiểm tra định dạng email và cập nhật trạng thái hợp lệ
    if (validatePassword(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };
  const handleUsernameChange = (e) => {
    const usernameInput = e.target.value;
    setUsername(usernameInput);
    const isUsernameValid = usernameInput.length >= 6;
    if (isUsernameValid) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };
  const showErrorMessage = signUpClicked && !validEmail;
  const showErrorMessagePass = signUpClicked && !validPassword;
  const showErrorMessageUsername = signUpClicked && !validUsername;
  const showErrorMessageConfirmPass = signUpClicked && !validConfirmPassword;
  return (
    <Wrapper>
      <Logo desc={"Register"} />

      <form>
        <div className="input_group">
          <div className="input input-user">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="text"
              id="username"
              name="username"
              placeholder={"Username"}
              textColor={"var(--text-color-input)"}
              bgColor={"var(--bg-color-input)"}
              // onChange={(e) => setUsername(e.target.value)}
              onChange={handleUsernameChange}
            />
            {showErrorMessageUsername && (
              <p
                className="error-text"
                style={{ position: "absolute", top: "40px" }}
              >
                Username have at least 6 characters
              </p>
            )}
          </div>
        </div>
        <div className="input_group">
          <div className="input input-user">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="text"
              id="email"
              name="email"
              placeholder={"Email"}
              textColor={"var(--text-color-input)"}
              bgColor={"var(--bg-color-input)"}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleEmailChange}
            />
            {showErrorMessage && (
              <p
                className="error-text"
                style={{ position: "absolute", top: "40px" }}
              >
                Invalid email format
              </p>
            )}
          </div>
        </div>
        <div className="input_group input_group_pass ">
          <div className="input input-password">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="password"
              id="password"
              name="password"
              placeholder={"Enter your password"}
              textColor={"var(--text-color-input)"}
              bgColor={"var(--bg-color-input)"}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handlePasswordChange}
            />
            {showErrorMessagePass && (
              <p
                className="error-text"
                style={{ position: "absolute", top: "40px" }}
              >
                Password must have at least 8 characters, number and uppercase
                letters
              </p>
            )}
          </div>
        </div>
        <div className="input_group input_group_pass ">
          <div className="input input-password">
            <Input
              width={430}
              height={50}
              borderRadius={8}
              type="password"
              id="password"
              name="password"
              textColor={"var(--text-color-input)"}
              bgColor={"var(--bg-color-input)"}
              placeholder={"Confirm your password"}
              onChange={handleConfirmPasswordChange}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {showErrorMessageConfirmPass && (
              <p
                className="error-text"
                style={{ position: "absolute", top: "40px" }}
              >
                Password does not match confirmation.
              </p>
            )}
          </div>
        </div>
        <div className="btn-form">
          <div
            style={{
              marginTop: "30px",
              height: "62px",
              position: "relative",
              border: "none",
              borderRadius: "50px",
              backgroundImage:
                "linear-gradient(228.09deg, #FF2CF7 -9.95%, rgba(251, 4, 123, 0.796875) 12.47%, rgba(255, 126, 188, 0.81) 30.87%, rgba(255, 255, 255, 0) 53.87%, rgba(73, 255, 233, 0.65) 70.34%, #130EFF 100.44%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
          >
            <Button
                title={"CREATE ACCOUNT"}
              width={"420px"}
              height={"60px"}
              text_color="var(--color-primary)"
              bg_color="var(--bg-color-input)"
              fontSize={"22px"}
              radius={"50px"}
              type="button"
              id="btn-signup"
              className="btn-signup"
              onClick={() => signUp()}
            >
            </Button>
            {/* <div style={{marginTop: "15px"}}></div>
            <Button
                  title={"SIGNUP"}
                  width={"420px"}
                  height={"60px"}
                  text_color="var(--color-primary)"
                  bg_color="var(--bg-color-input)"
                  fontSize={"22px"}
                  radius={"50px"}
                  type="submit"
                  id="btn-signup"
                  className="btn-signup"
                  onClick={() => signUp()}
              >
              </Button> */}
          </div>
        </div>
      </form>
      <span className="policy">
        By clicking “Create Account” you agree to our
        <br /> <b>terms</b> and <b>privacy policy</b>.
      </span>
      <Switch
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
        onClick={handleToggleDarkMode}
        checkedChildren={""}
        unCheckedChildren={""}
        defaultChecked={true}
      />
    </Wrapper>
  );
};
export default SignUp;