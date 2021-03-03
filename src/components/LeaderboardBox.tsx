import styles from '../styles/components/LeaderboardBox.module.css';

export function LeaderboardBox(){
  return(
    <div className={styles.leaderboardContainer}>
      <div className={styles.positionContainer}>
        <span>1</span>
      </div>

      <div className={styles.userInformation}>

        <div className={styles.profileInformation}>
          <img src="https://avatars.githubusercontent.com/u/61480933?s=460&u=032fdbc1bd3e89b8d4016bf25c18e07098ebc988&v=4" alt="Iago Farias"/>
          <div>
            <span className={styles.userName}>Iago Farias</span>
            <div className={styles.userLevel}>
              <img src="/icons/level.svg" alt="Level icon"/>
              <span>Level 40</span>
            </div>
          </div>
        </div>

        <div className={styles.achievementsInformation}>
          <span>
            <strong>
              127 {" "}
            </strong>
            completados
          </span>


          <span>
            <strong>100000{" "}</strong>
            xp
          </span>
        </div>

      </div>
    </div>
  );
}