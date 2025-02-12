import React from "react";
import styles from "./Sidebar.module.css"

const Sidebar = () => {

    return(
        <div className={styles.container}>
            <div className={styles.home}>
                <span className={styles.homeIcon}><i class="fa-solid fa-house"></i></span>
                <span className={styles.homeText}>Home</span>
            </div>

            <div className={styles.liked}>
                <span className={styles.likedIcon}><i class="fa-solid fa-thumbs-up"></i></span>
                <span className={styles.likedText}>Liked videos</span>
            </div>

            <div className={styles.playlist}>
                <span className={styles.plIcon}><i class="fa-solid fa-list-ul"></i></span>
                <span className={styles.plText}>Playlists</span>
            </div>

            <div className={styles.wLater}>
                <span className={styles.wlIcon}><i class="fa-solid fa-hourglass-half"></i></span>
                <span className={styles.wlText}>Watch later</span>
            </div>

            <hr className={styles.hr}/>

            <div className={styles.myprofile}>
                <span className={styles.mpIcon}><i class="fa-solid fa-user"></i></span>
                <span className={styles.mpText}>My profile</span>
            </div>

            <div className={styles.myposts}>
                <span className={styles.mpostsIcon}><i class="fa-solid fa-video"></i></span>
                <span className={styles.mpostsText}>My posts</span>
            </div>

            <div className={styles.mycoments}>
                <span className={styles.mcIcon}><i class="fa-solid fa-comment"></i></span>
                <span className={styles.mcText}>My coments</span>
            </div>

            <div className={styles.mydownloads}>
                <span className={styles.mdIcon}><i class="fa-solid fa-download"></i></span>
                <span className={styles.mdText}>My downloads</span>
            </div>

            <hr className={styles.hr}/>

            <div className={styles.trending}>
                <span className={styles.trIcon}><i class="fa-solid fa-fire"></i></span>
                <span className={styles.trText}>Trending now</span>
            </div>

            <div className={styles.games}>
                <span className={styles.gIcon}><i class="fa-solid fa-gamepad"></i></span>
                <span className={styles.gText}>Games</span>
            </div>

            <div className={styles.movies}>
                <span className={styles.mvIcon}><i class="fa-solid fa-clapperboard"></i></span>
                <span className={styles.mvText}>Movies</span>
            </div>

            <div className={styles.live}>
                <span className={styles.lIcon}><i class="fa-solid fa-tower-broadcast"></i></span>
                <span className={styles.lText}>Live</span>
            </div>

            <div className={styles.music}>
                <span className={styles.msIcon}><i class="fa-solid fa-music"></i></span>
                <span className={styles.msText}>Music</span>
            </div>

            <div className={styles.news}>
                <span className={styles.nwIcon}><i class="fa-solid fa-newspaper"></i></span>
                <span className={styles.nwText}>News</span>
            </div>

            <div className={styles.sports}>
                <span className={styles.spIcon}><i class="fa-solid fa-medal"></i></span>
                <span className={styles.spText}>Sports</span>
            </div>

            <div className={styles.learning}>
                <span className={styles.lrIcon}><i class="fa-solid fa-graduation-cap"></i></span>
                <span className={styles.lrText}>Learning</span>
            </div>
            

        </div>
    )

}

export default Sidebar