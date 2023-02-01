import React, { useRef, useState } from "react";
import styles from "../Auth/Login.module.css";
import googleicon from "../../assets/image/google.png";
import appleicon from "../../assets/image/apple.png";
import facebook from "../../assets/image/facebook.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const handleNavi = () => navigate("/Signup");
  const handleNaviReset = () => navigate("/ResetPassword");
  const { login } = useAuth();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  const redirectPath = location.state?.path || "/Main";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      seterror("");
      setloading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(redirectPath, { replace: false });
    } catch {
      seterror("Faild to login");
    }
    setloading(false);
  };

  return (
    <>
      <div className={styles.container}>
        {error && window.alert(error)}

        <div className={styles.loginForm} onSubmit={handleSubmit}>
          <form className={styles.formContainer}>
            <h1>Sign in</h1>
            <input
              type='text'
              placeholder='Email'
              name='email'
              ref={emailRef}
            />
            <input type='password' placeholder='Password' ref={passwordRef} />
            <div className={styles.loginBtn}>
              <button disabled={loading}>Sign in</button>
            </div>
            <div className={styles.loginSocial}>
              <p> Or login with </p>
              <div className={styles.loginSocialIcon}>
                <img src={googleicon} alt='' />
                <img src={appleicon} alt='' />
                <img src={facebook} alt='' />
              </div>
            </div>
            <div className={styles.loginForgetPsw}>
              <a onClick={handleNaviReset}>Did you Forget Password ?</a>
            </div>
            <div className={styles.signupLink}>
              <p onClick={handleNavi}>Didn't Have An Account ? Signup</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
