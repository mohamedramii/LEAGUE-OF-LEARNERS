import React, { useRef, useState } from "react";
import styles from "../Singup/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext/AuthContext";

const Signup = () => {
  const {signup} = useAuth();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const navigate = useNavigate();

  const handleNavi = () => navigate("/login");
    const handleNaviReset = () => navigate("/ResetPassword");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return seterror("passwords do not match");
    }
    try {
      seterror("");
      setloading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/Main");
    } catch {
      seterror("Faild to create an account");
    }
    setloading(false);
  };

  return (
    <div className={styles.container}>
      {error && window.alert(error)}
      <div className={styles.loginForm} onSubmit={handleSubmit}>
        <form className={styles.formContainer}>
          <h1>Sign up</h1>
          <input
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            ref={emailRef}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            ref={passwordRef}
          />
          <input
            type='password'
            placeholder='Password Confirmation'
            id='password-confirmation'
            ref={passwordConfirmationRef}
          />
          <div className={styles.loginBtn}>
            <button disabled={loading}>Sign up</button>
          </div>
          <div className={styles.loginSocial}>
            <p> Or login with </p>
            <div className={styles.loginSocialIcon}>
              <img alt='' />
              <img alt='' />
              <img alt='' />
            </div>
          </div>
          <div className={styles.loginForgetPsw}>
            <a onClick={handleNaviReset}>Did you Forget Password ?</a>
          </div>
          <div className={styles.signupLink}>
            <p onClick={handleNavi}>dO YOU HAVE ALREADY ACCOUNT ? signin</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
