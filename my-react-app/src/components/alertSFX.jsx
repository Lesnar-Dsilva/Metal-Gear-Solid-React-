
import { useRef, useEffect } from 'react';

export const useWithSound = (audioSource) => {
  const soundRef = useRef();

    useEffect(() => {
    soundRef.current = new Audio(audioSource);
  }, []);

  const playSound = () => {
    soundRef.current.play();
    soundRef.current.volume = 0.1;
  }

  return {
    playSound
  };
}
