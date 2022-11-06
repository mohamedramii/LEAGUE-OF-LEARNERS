import React from 'react'
import styles from "../NavLinks/NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <span>Your Courses</span>
        <span>Start Quiz</span>
        <span>Your progress</span>
        <span>Contact Us</span>
        <span>Add Course</span>
      </div>
    </div>
  );
};

export default NavLinks;