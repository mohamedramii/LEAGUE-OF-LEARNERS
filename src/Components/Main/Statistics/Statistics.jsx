import React from "react";
import styles from "../Statistics/Statistics.module.css";
import curve from ".././../.././assets/image/historical-curve.png";
const Statistics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <p>Statistics</p>
        <div className={styles.boxsStat}>
          <div className={styles.boxStat}>
            <p className={styles.numStat}>3</p>
            <p className={styles.stateStat}>Mistak</p>
          </div>
          <div className={styles.boxStat}>
            <p className={styles.numStat}>3</p>
            <p className={styles.stateStat}>Correct</p>
          </div>
          <div className={styles.boxStat}>
            <p className={styles.numStat}>5/8</p>
            <p className={styles.stateStat}>Rest on the way</p>
          </div>


          
          <div className={styles.boxStatCurve}>


            <div className={styles.containerBoxStat}>

              <p className={styles.numStat}>7.5</p>
              <p className={styles.stateStat}>Hours spent this week</p>
              
            </div>


            <div className={styles.curveState}>
              <img src={curve} alt='' />
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
