
import { Button } from "components/Button";
import Logo from "components/Logo/Logo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "components/Input";
import EmailIcon from "../../assets/email-icon.svg";
import PasswordIcon from "../../assets/password-icon.svg";
import { Divider, Switch } from "antd";




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
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
  }
  .input_group_label {
    color: var(--bg-color-input);
  }
  .input {
    position: relative;
    box-shadow: var(--box-shadow-1);

    box-shadow: var(--box-shadow-2);
  }
  .input-user {
    position: relative;
  }
  .input-user::after,
  .input-password::after {
    position: absolute;
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    right: 0;
    top: 0;
    border-radius: 8px;

    /* background-size: cover; */
  }
  .input-user::after {
    background-image: url(${EmailIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  .input-password::after {
    background-image: url(${PasswordIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  .input::after svg {
    width: 20px; /* Đặt kích thước mong muốn cho SVG */
    height: 20px; /* Đặt kích thước mong muốn cho SVG */
    fill: var(--bg-color-input);
  }
  .remember-part {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  .forgot-span {
    margin-top: -80px !important;
    color: #c4a5bc;
    font-size: 14px;
    text-decoration: underline;
    color: var(--bg-color-input);
  }
  .remember-password {
    display: flex;
    align-items: center;
  }

  .remember-password input[type="checkbox"] {
    display: none;
  }

  .remember-password label {
    margin-top: -80px;
    margin-left: 10px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
    color: var(--bg-color-input);
  }

  .remember-password label:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 6px;
    vertical-align: text-bottom;
    background-color: white;
  }

  .remember-password input[type="checkbox"]:checked + label:before {
    background-color: var(--color-primary);
    box-shadow: var(--box-shadow-check), 0px 4px 4px 0px #00000040;
  }
  .btn-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-signin {
    font-weight: 700;
    font-size: 22px;
    box-shadow: var(--box-shadow-check), 0px 4px 4px 0px #00000040;
    cursor: pointer;
    margin-top: 30px;
  }
  .btn-signup {
    font-weight: 700;
    font-size: 22px;
    /* box-shadow: 0px 0px 9px 1px #780eff, 0px 4px 4px 0px #00000040; */
    cursor: pointer;
    /* margin-top: 30px; */
  }
  .login-center {
    padding: 50px 0;
  }
  .container-toast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error-text {
    color: red;
    font-size: 12px;
  }
  /*
  .btn-signin:hover {
    background-color: #3311b9;
    cursor: pointer;
  } */
`;
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    // const userLogin = useSelector((state) => state.userLogin);
    // const { error, loading, userInfo } = userLogin;
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [signInClicked, setSignInClicked] = useState(false);
    // document.querySelector("body").setAttribute("data-mode", "dark");
    const handleSignInClick = () => {
        setSignInClicked(true);
    };
    function validateEmail(username) {
        // Biểu thức chính quy để kiểm tra định dạng email
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Kiểm tra định dạng email bằng biểu thức chính quy
        if (pattern.test(username)) {
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

    // Xử lý sự kiện thay đổi của ô input email
    const handleEmailChange = (e) => {
        const email = e.target.value;
        setUsername(email);

        // Kiểm tra định dạng email và cập nhật trạng thái hợp lệ
        if (validateEmail(email)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    useEffect(() => {
        const checkToken = localStorage.getItem("userToken");
        if (checkToken) {
            navigate("/");
        }
    }, [])
    const submitHandler = async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const formData = {
            username: username,
            password: password,
        };
        const token = await dispatch.user.login(formData);
        setTimeout(nav(token), 2000);
    };
    const nav = (token) => {
        if (token != null) {
            alert("Login Success!");
            localStorage.setItem("userToken", token);
            navigate("/");
        } else {
            alert("Login Fail!");
        }
    }
    const signUp = () => {
        navigate("/signup");
    }
    const showErrorMessage = signInClicked && !validEmail;
    return (
        <Wrapper>
            <>
                <Logo desc={"Login into your"} />
                <div style={{ display: "none" }} className="">
                    {/* {error && toast.error(error)} */}
                    {/* {error && <Toast />} */}
                    {/* {loading && <Loading />} */}
                </div>
                <form onSubmit={submitHandler}>
                    <div className="input_group">
                        <label className="input_group_label " htmlFor="username">
                            Email address
                        </label>
                        <div className={`input input-user ${validEmail ? "" : "invalid"}`}>
                            <Input
                                width={430}
                                height={50}
                                borderRadius={8}
                                type="text"
                                id="username"
                                name="username"
                                placeholder={"marvelous@email.com"}
                                textColor={"var(--text-color-input)"}
                                bgColor={"var(--bg-color-input)"}
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
                        {/* <p className="forgot-label">Forgot password?</p> */}
                        <label className="input_group_label " htmlFor="password">
                            Password
                        </label>
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="remember-part">
                        <div className="remember-password">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>

                        <span className="forgot-span">Forgot password?</span>
                    </div>
                    <div className="btn-form">
                        <Button
                            title={"LOGIN"}
                            width={"420px"}
                            height={"60px"}
                            text_color="var(--color-primary)"
                            bg_color="var(--bg-color-input)"
                            fontSize={"22px"}
                            radius={"50px"}
                            type="submit"
                            id="btn-signup"
                            className="btn-signup"
                            onClick={handleSignInClick}
                        >
                        </Button>
                        <Divider
                            style={{
                                color: "#fff",
                                backgroundColor: "#ccc",
                                height: "1px",
                                marginTop: "40px",
                                // zIndex: -1,
                            }}
                            orientation="center"
                            plain
                        >
                            <span
                                style={{
                                    color: "var(--bg-color-input)",
                                    backgroundColor: "var(--background-signin-color)",
                                    height: "20px",
                                    width: "20px",
                                    padding: "10px",
                                    fontSize: "22px",
                                    // zIndex: -1,
                                }}
                            >
                                OR
                            </span>
                        </Divider>
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
                            </Button>
                        </div>
                    </div>
                </form>

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
            </>
        </Wrapper>
    );
};
export default Login;