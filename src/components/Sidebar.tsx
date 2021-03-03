import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(){
  const route = useRouter();

  return(
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>
        <img src="/icons/Logo.svg" alt="Logo"/>
      </div>

      <div className={styles.buttonsContainer}>
        <Link href="/">
          <button 
            type="button"
            className={
              route.pathname === '/' 
              ? styles.selectedPage
              : undefined
          }
          >
            {
               route.pathname === '/'
               ? <img src="/icons/home-blue.svg" alt="Home icon"/>
               : <img src="/icons/home-gray.svg" alt="Home icon"/>
            }
          </button>
        </Link>
        
        <Link href="/leaderboard">
          <button 
            type="button"
            className={
              route.pathname === '/leaderboard' 
              ? styles.selectedPage 
              : undefined
            }
          >
            {
              route.pathname === '/leaderboard'
              ? <img src="/icons/award-blue.svg" alt="Award icon"/>
              : <img src="/icons/award-gray.svg" alt="Award icon"/>
            }
          </button>
        </Link>
      </div>
    </div>
  );
}