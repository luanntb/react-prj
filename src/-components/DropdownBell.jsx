import React from "react";
import styles from "./DropdownBell.module.css"

const DropdownBell = () => {
    return(

        <div className={styles.container}>
            <div className={styles.DropdownBell}>

                <div className={styles.notification}>
                    <span className={styles.bellIcon}><i class="fa-solid fa-bell"></i></span>
                    <span className={styles.bellText}>Notifications</span>
                </div>
                <hr className={styles.infHr} />

                <span className={styles.nnIcon}><i class="fa-solid fa-ghost"></i></span>
                <span className={styles.nnWarn}>All clear!</span>

            </div>
        </div>

    )
}

export default DropdownBell;