import React from "react";
import styles from "./Videobox.module.css"

const Videobox = ( {src, srca }) => {

    return(

        <div className={styles.container}>
            <div className={styles.info}>
                <img className={styles.thumbnail} src={src}/>
            </div>
            <div className={styles.account}>
                <img className={styles.pic} src={srca}/>
                    <styles className={styles.inContainer}>
                        <span className={styles.videoName}> EXEMPLO DE TÍTULO DE VIDEO </span>
                        <span className={styles.userName}>Publicadoranonimo562</span>
                    </styles>
            </div>
        </div>
    )
}

export default Videobox;