import Head from 'next/head';
import { LeaderboardBox } from '../components/LeaderboardBox';
import { Sidebar } from '../components/Sidebar';
import styles from '../styles/pages/Leaderboard.module.css';

export default function Leaderboard(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>

      <Sidebar />
      
      <main>
        <h1>Leaderboard</h1>

        <div className={styles.leaderboardContainer}>
          <div className={styles.header}>
            <div>
              <span>Posição</span>
              <span>Usuário</span>
            </div>

            <div>
              <span>Desafios</span>
              <span>Experiência</span>
            </div>
          </div>
          <LeaderboardBox />
          <LeaderboardBox />
          <LeaderboardBox />

        </div>
      </main>
      
    </div>
  );
}