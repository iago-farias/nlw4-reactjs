import { useState } from 'react';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(){
  const [selectedPage, setSelectedPage] = useState('home');

  return(
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img src="/icons/Logo.svg" alt="Logo"/>
      </div>

      <div className={styles.buttonsContainer}>
        <button 
          type="button"
          className={selectedPage==='home' && styles.selectedPage}
        >
          <img src="/icons/home.svg" alt="Home icon"/>
        </button>

        <button 
          type="button"
          className={selectedPage==='leaderboard' && styles.selectedPage}
        >
          <img src="/icons/award.svg" alt="Award icon"/>
        </button>
      </div>
    </div>
  );
}