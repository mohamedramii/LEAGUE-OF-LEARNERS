import React from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import styles from "../Main/Main.module.css";
import CourseContent from "./CourseContent/CourseContent";
import LSideBar from "./LeftSideBar/LSideBar";
import RSideBar from "./RSideBar/RSideBar";
import Statistics from "./Statistics/Statistics";

const Main = () => {
  const { currentUser } = useAuth();



  return (
    <div className={styles.screen}>
      <LSideBar  />

      <div className={styles.main}>
        <div className={styles.helloUX}>
          <p>WELCOME BACK , {currentUser.email} !</p>
        </div>

        <div className={styles.BoxCoursename}>
          <div className={styles.courseName}>
            <p>React.js Course</p>
          </div>
        </div>

        <Statistics />
        <CourseContent />
      </div>

      <RSideBar />
    </div>
  );
};

export default Main;
