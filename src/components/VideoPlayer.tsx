import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface VideoPlayerProps {
  principalSrc: string;
  fiestaSrc: string;
}

const VideoPlayer = ({ principalSrc, fiestaSrc }: VideoPlayerProps) => {
  const [isFiestaMode, setIsFiestaMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's ok
      });
    }
  }, [isFiestaMode]);

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFiesta = () => {
    setIsFiestaMode(!isFiestaMode);
  };

  return (
    <div className="relative w-full mb-8 animate-fade-in">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <audio
          ref={videoRef as React.RefObject<HTMLAudioElement>}
          className="w-full"
          autoPlay
          loop
          muted={isMuted}
          controls={false}
        >
          <source src={isFiestaMode ? fiestaSrc : principalSrc} type="audio/mp4" />
          Tu navegador no soporta audio.
        </audio>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {/* Volume Controls */}
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gold-light/30">
          <button
            onClick={toggleMute}
            className="text-gold hover:text-gold/80 transition-colors"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          
          <Slider
            value={[isMuted ? 0 : volume]}
            onValueChange={handleVolumeChange}
            max={1}
            step={0.1}
            className="w-24"
          />
        </div>

        {/* Fiesta Button */}
        <Button
          onClick={toggleFiesta}
          variant={isFiestaMode ? "default" : "outline"}
          className={`
            font-sans uppercase tracking-wider text-sm
            ${isFiestaMode 
              ? 'bg-gold hover:bg-gold/90 text-primary-foreground' 
              : 'border-gold text-gold hover:bg-gold/10'
            }
          `}
        >
          <PartyPopper className="w-4 h-4 mr-2" />
          {isFiestaMode ? '¡FIESTA! 🥳' : 'FIESTA 🥳'}
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
