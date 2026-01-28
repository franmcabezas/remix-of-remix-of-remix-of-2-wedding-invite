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
    <>
      {/* Hidden audio element */}
      <audio
        ref={videoRef as React.RefObject<HTMLAudioElement>}
        autoPlay
        loop
        muted={isMuted}
        className="hidden"
      >
        <source src={isFiestaMode ? fiestaSrc : principalSrc} type="audio/mp4" />
      </audio>

      {/* Sticky controls at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-gold-light/30 py-3 px-4 animate-fade-in">
        <div className="container max-w-2xl mx-auto flex items-center justify-center gap-4 flex-wrap">
          {/* Volume Controls */}
          <div className="flex items-center gap-2 bg-background/50 rounded-full px-4 py-2 border border-gold-light/20">
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
    </>
  );
};

export default VideoPlayer;
