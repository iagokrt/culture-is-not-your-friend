import React, { useState, useEffect } from "react";


const useAudio = (url) => {
  // audio hook useState
  const [audio] = useState(new Audio(url));
  
  // is player on/off? the playing state will be toggled 
  // with the useEffect hook trough setPlaying
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>Toggle sound</button>
    </div>
  );
};

export default Music;
