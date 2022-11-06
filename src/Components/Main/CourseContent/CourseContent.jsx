import React from 'react'
import styles from "../CourseContent/CourseContent.module.css";
import docIcon from "../.././../assets/image/docs.png";
import vidIcon from "../.././../assets/image/play.png";
const CourseContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.courseContent}>
        <p>Course Content</p>
        <div className={styles.boxsOfLessons}>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>1 </p>
              </div>

              <div className={styles.titleLess}>
                <p>React.js</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>2 </p>
              </div>

              <div className={styles.titleLess}>
                <p>intro React.js</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>3 </p>
              </div>

              <div className={styles.titleLess}>
                <p>JSX</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>4 </p>
              </div>

              <div className={styles.titleLess}>
                <p>Usestate</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>5 </p>
              </div>

              <div className={styles.titleLess}>
                <p>Useeffect</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
          <div className={styles.boxOflesson}>
            <div className={styles.boxContainer}>
              <div className={styles.numLess}>
                <p>6 </p>
              </div>

              <div className={styles.titleLess}>
                <p>Redux</p>
              </div>
              <div className={styles.iconsLesson}>
                <img src={docIcon} alt='' />
                <img src={vidIcon} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent