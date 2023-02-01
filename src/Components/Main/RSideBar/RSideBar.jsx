import React, { useState } from "react";
import styles from "../RSideBar/RSideBar.module.css";
import profilePic from "../../..//assets/image/person.png";
import notification from "../../..//assets/image/notification.png";
import message from "../../..//assets/image/message.png";
import friends from "../../..//assets/image/friends.png";
import progress from "../../..//assets/image/progress.png";
import { useAuth } from "../../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const RSideBar = () => {
  const { currentUser } = useAuth();
  const [error, seterror] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    seterror("")
    try {
      await logout();
      navigate("/login");
    } catch {
      seterror("faild to logout");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profilePic}>
            <img src={profilePic} alt='' />
          </div>
          <div className={styles.profileName}>
            <p>{currentUser && currentUser.email}</p>
          </div>
          <div className={styles.profileNoti}>
            <img src={notification} alt='' />
            <img src={message} alt='' />
            <img src={friends} alt='' />
          </div>
        </div>

        <div className={styles.testContainer}>
          <div className={styles.test}>
            <button>Test</button>
          </div>
        </div>
        <div className={styles.courseProgress}>
          <p>Course Progress</p>
          <div className={styles.progressImg}>
            <img src={progress} alt='' />
          </div>
          <div className={styles.logOut}>
            <button onClick={handleLogout}>log out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RSideBar;
