import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout : NodeJS.Timeout;

export function CountdownProvider({children} : CountdownProviderProps){

  const {startNewChallenge} = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60); //Tempo em segundos
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  function startCountDown(){
    setIsActive(true);
  }

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
    
  }, [isActive, time]);

  return(
    <CountdownContext.Provider 
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountdown
      }}
    >
      {
        children
      }
    </CountdownContext.Provider>
  );
}