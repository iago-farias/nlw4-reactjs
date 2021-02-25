import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/61480933?s=460&u=032fdbc1bd3e89b8d4016bf25c18e07098ebc988&v=4" alt="Iago Farias"/>
      <div>
        <strong>Iago Farias</strong>
        <p>
          <img src="icons/level.svg" alt="Level up"/>
          Level 1
        </p>
      </div>
    </div>
  );
}