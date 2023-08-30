import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
    <button
      className={`w-16 h-16 rounded-full border-4 border-purple-400 ${
        isPlaying ? 'animate-pulse' : ''
      }`}
     
    >
    <div className='w-14 h-14 rounded-full border-4 border-white flex justify-center items-center'>
    <FaPlay size={24} color="white" />
    </div>
    </button>    
    
    </div>
  );
};

export default PlayButton;
