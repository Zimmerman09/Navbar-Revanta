import React, { useState } from 'react'
import styles from "./nav.module.css"
import {FcMenu} from "react-icons/fc";
const Nav = () => {

  const [menuOpen,setMenuOpen]=useState(false);
    return (
        <div>
            <nav className={styles.container}>
              <ul className={menuOpen?styles.open:styles.unkown}>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Members</a></li>
                <li><a href='#'>Sponsers</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
              <div className={styles.team_name}>
                 Team Revanta
              </div>
              <div className={styles.responsive
              }>
              </div>
              <div className={styles.btn}>
                 <button className={styles.btn1}>Register</button>
                 <button className={styles.btn2}>LogIn</button>
              </div>
              
              <div className={styles.ham}>

              <FcMenu  onClick={()=>{
                setMenuOpen(!menuOpen);


              }}/>
              </div>

             
          
      

            </nav>
        </div>

    )
}

export default Nav
