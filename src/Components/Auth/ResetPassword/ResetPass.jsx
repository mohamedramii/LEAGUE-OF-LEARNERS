import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext/AuthContext";
import styles from "../ResetPassword/ResetPass.module.css";

const ResetPass = () => {
    const { resetpass } = useAuth();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);
    const emailRef = useRef();
    const [msg, setmsg] = useState("")

  const navigate = useNavigate();

  const handleNavi = () => navigate("/Signup");
   const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       seterror("");
       setloading(true);
       await resetpass(emailRef.current.value);
       setmsg("Check your email to get new password");
     } catch {
       seterror("Faild to Reset Password");
     }
     setloading(false);
   };

  return (
    <div>
      <div className={styles.container}>
        {error && window.alert(error)}
        {msg && window.alert(msg)}

        <div className={styles.loginForm} onSubmit={handleSubmit}>
          <form className={styles.formContainer}>
            <h1>Reset Password</h1>
            <input
              type='text'
              placeholder='Email'
              name='email'
              ref={emailRef}
            />

            <div className={styles.loginBtn}>
              <button disabled={loading}>Reset</button>
            </div>

            <div className={styles.signupLink}>
              <p onClick={handleNavi}>Didn't Have An Account ? Signup</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
