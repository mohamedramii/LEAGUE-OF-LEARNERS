import React from 'react'
import styles from "../LeftSideBar/LSideBar.module.css";
import logo from '../../../assets/image/logo.png'
import ReactJs from '../../../assets/image/reactlogo.png'
import HTML from '../../../assets/image/html.png'
import CSS from '../../../assets/image/css.png'
import JavaScript from '../../../assets/image/js.png'
import DataScience from '../../../assets/image/data-science.png'
import PlusIcon from "../../../assets/image/plusicon.svg";
import email from "../../../assets/image/pngwing.png";
import whatsapp from "../../../assets/image/whatsapp.png";
import phoneicone from "../../../assets/image/call.png";







const LSideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
      </div>

      <div className={styles.yourCourses}>
        <div className={styles.titleSec}>
          <p>Your Courses</p>
        </div>

        <div className={styles.urCourse}>
          <img src={HTML} alt='' />
          <p>HTML</p>
        </div>
        <div className={styles.urCourse}>
          <img src={CSS} alt='' />
          <p>CSS</p>
        </div>
        <div className={styles.urCourse}>
          <img src={JavaScript} alt='' />
          <p>Java Script</p>
        </div>
        <div className={styles.urCourse}>
          <img src={ReactJs} alt='' />
          <p>React.js</p>
        </div>
        <div className={styles.urCourse}>
          <img src={DataScience} alt='' />
          <p>Data Science</p>
        </div>
        <div className={`${styles.urCourse}  ${styles.addCourse}`}>
          <img src={PlusIcon} alt='' />
          <p>Add Course</p>
        </div>
      </div>

      <div className={styles.contactUsContainer}>
        <div className={styles.contactUs}>
          <p>Contact Us</p>
        </div>
        <div className={styles.contactUsIcon}>
          <img src={phoneicone} alt='' />
          <img src={whatsapp} alt='' />
          <img src={email} alt='' />
        </div>
      </div>
    </div>
  );
}

export default LSideBar