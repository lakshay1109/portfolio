import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 1. Initial configuration
    if (audioRef.current) {
      audioRef.current.volume = 0.05;
      audioRef.current.loop = true;
    }

    // 2. Function to start music on first click
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // 3. Remove listener so it doesn't keep firing every click
            window.removeEventListener("click", handleFirstInteraction);
          })
          .catch(err => console.log("Playback failed:", err));
      }
    };

    // Add listener to the whole window
    window.addEventListener("click", handleFirstInteraction);

    // Cleanup listener if component unmounts
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [isPlaying]);

  const toggleMusic = (e) => {
    // Prevent the window click listener from firing when clicking the button
    e.stopPropagation(); 

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/bg_music.mp3" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/60 backdrop-blur border border-white/20 hover:bg-black/80 transition"
      >
        {isPlaying ? (
          <Volume2 className="text-white" size={22} />
        ) : (
          <VolumeX className="text-white" size={22} />
        )}
      </button>
    </>
  );
}