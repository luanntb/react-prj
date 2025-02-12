import React from "react";
import styles from "./DropdownMenu.module.css"
import userData from "../assets/userData.json"
import defaultPic from "../assets/default-pic.jpg"

const DropdownMenu = () => {

    const userPic = userData.pic ? userData.pic : defaultPic;

    return(

    <div className={styles.container}>

        <div className={styles.dropdownMenu}>
            <div className={styles.userInf}>
                <div className={styles.userPicDiv}>
                    <img className={styles.userPic} src={userPic} alt=""/>
                </div>
                <div className={styles.userNameDiv}>
                    <span className={styles.userName}>{userData.nome}</span>
                    <span className={styles.userEmail}>{userData.email}</span>
                </div>
            </div>
            <hr className={styles.menuHr}/>
            
            <div className={styles.editProfile}>
                <span className={styles.epIcon}><i class="fa-solid fa-user"></i></span>
                <span className={styles.epTxt}>Edit profile</span>
            </div>

            <div className={styles.favorites}>
                <span className={styles.favIcon}><i class="fa-solid fa-money-bill"></i></span>
                <span className={styles.favTxt}>My purchases</span>
            </div>

            <div className={styles.history}>
                <span className={styles.hisIcon}><i class="fa-solid fa-clock-rotate-left"></i></span>
                <span className={styles.hisTxt}>Browsing history</span>
            </div>

            <hr className={styles.infHr} />

            <div className={styles.settings}>
                <span className={styles.setIcon}><i class="fa-solid fa-gear"></i></span>
                <span className={styles.setTxt}>Settings</span>
            </div>

            <div className={styles.helpFaq}>
                <span className={styles.hfIcon}><i class="fa-solid fa-circle-info"></i></span>
                <span className={styles.hfTxt}>Help/FAQ</span>
            </div>

            <div className={styles.issueReport}>
                <span className={styles.isRepIcon}><i class="fa-solid fa-bug"></i></span>
                <span className={styles.isRepTxt}>Issue report</span>
            </div>
            
            <div className={styles.feedback}>
                <span className={styles.fbIcon}><i class="fa-solid fa-comment"></i></span>
                <span className={styles.fbTxt}>Feedback</span>
            </div>

            <hr className={styles.infHr} />

            <div className={styles.logout}>
                <span className={styles.loIcon}><i class="fa-solid fa-right-from-bracket"></i></span>
                <span className={styles.loTxt}>Logout</span>
            </div>

        </div>

    </div>

    )
}

export default DropdownMenu;