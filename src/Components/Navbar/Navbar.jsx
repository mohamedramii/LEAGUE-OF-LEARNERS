import React from "react";
import styles from "../Navbar/Navbar.module.css";
import logo from '../../assets/image/logo.png'
import {AiOutlineMenuFold} from 'react-icons/ai'
import { useState } from "react";
import NavLinks from "../Navbar/NavLinks/NavLinks";


const Navbar = () => {

  const [open, setopen] = useState(false)


  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href='/'>
          <img src={logo} alt='' />
        </a>
      </div>

      <div className={styles.mobNav}>
        <AiOutlineMenuFold
          className={styles.mobIcone}
          onClick={() => setopen(!open)}
        />
      </div>


      {open && <NavLinks />}

      

    </div>
  );
};

export default Navbar;


// hanrg3 llvideo elly ana 3mltlo like 34an akml el menu
