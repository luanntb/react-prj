import React from "react"
import styles from "./TopBar.module.css"
import logo from "../assets/flickster-icon.png"
import { useState, useRef } from "react"
import DropdownMenu from "./dropdownMenu"
import DropdownBell from "./DropdownBell"

const TopBar = () => {

      const inputRef = useRef(null)
      const [ddVisible, setddVisible] = useState(false);
      const [dbVisible, setdbVisible] = useState(false);

      const handleFocus = () => {
         inputRef.current?.focus()
      };

      const toggleDD = () => {
         if(dbVisible) setdbVisible(false)
         setddVisible(!ddVisible)
      }

      const toggleDB = () => {
         if(ddVisible) setddVisible(false)
         setdbVisible(!dbVisible)
      }

    return(
        <div className={styles.container}>
           
            <div className={styles.LeftComponents} onClick={() => window.location.reload()}>

               <img className={styles.imgLogo} src={logo}/>
               <span className={styles.nameLogo}>FLICKSTER</span>
            </div>

            <div className={styles.globalMiddle}>
               <div className={styles.MiddleComponents} onClick={handleFocus}>
                  <span className={styles.searchIcon}>
                     <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input className={styles.searchInput} type="search" placeholder="Pesquisar..." ref={inputRef}/>
               </div>
                  <span className={styles.voiceIcon}><i class="fa-solid fa-microphone"></i></span>
            </div>

            <div className={styles.RightComponents}>
               <form action="">
                  <span>
                     <button className={styles.uploadButton} type="submit" >Upload <i class="fa-solid fa-upload"></i></button>
                  </span>
               </form>

               <span className={styles.bellButton} onClick={toggleDB}>
                  <i class="fa-solid fa-bell"></i>
               </span>

               <span className={styles.profileButton} onClick={toggleDD}>
                  <i class="fa-solid fa-user"></i>
               </span>
            </div>

            {ddVisible && <DropdownMenu />}
            {dbVisible && <DropdownBell />}
            
        </div>

    );
};

export default TopBar;