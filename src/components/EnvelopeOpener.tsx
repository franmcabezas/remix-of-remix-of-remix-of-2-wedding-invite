import { useState } from 'react';

interface EnvelopeOpenerProps {
  onOpen: () => void;
}

const EnvelopeOpener = ({ onOpen }: EnvelopeOpenerProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        onOpen();
      }, 600);
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-700 ${
        isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--peach)) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, hsl(var(--blush)) 0%, transparent 50%)`
        }}
      />

      <div className="relative cursor-pointer" onClick={handleOpen}>
        {/* Envelope container */}
        <div className="relative w-72 h-48 sm:w-80 sm:h-52">
          
          {/* Envelope body */}
          <div className="absolute inset-0 rounded-lg shadow-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(35 40% 88%), hsl(30 35% 82%))',
              border: '1px solid hsl(35 30% 78%)',
            }}
          />

          {/* Envelope inner shadow/paper peek */}
          <div className="absolute inset-x-4 top-2 bottom-4 rounded"
            style={{
              background: 'hsl(40 30% 95%)',
              boxShadow: 'inset 0 2px 8px hsl(35 20% 70% / 0.3)',
            }}
          />

          {/* Envelope flap (triangle) */}
          <div
            className={`absolute inset-x-0 top-0 origin-top transition-transform ease-in-out ${
              isOpening ? 'duration-[1200ms] -scale-y-100' : 'duration-300'
            }`}
            style={{ zIndex: isOpening ? 1 : 10 }}
          >
            <svg viewBox="0 0 320 120" className="w-full" preserveAspectRatio="none">
              <path
                d="M0,0 L160,110 L320,0 Z"
                fill="hsl(33 38% 84%)"
                stroke="hsl(35 30% 78%)"
                strokeWidth="1"
              />
              {/* Flap inner shadow */}
              <path
                d="M10,2 L160,105 L310,2"
                fill="none"
                stroke="hsl(35 25% 75% / 0.5)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Bottom flap decoration */}
          <svg className="absolute bottom-0 inset-x-0 w-full" viewBox="0 0 320 60" preserveAspectRatio="none">
            <path
              d="M0,60 L160,5 L320,60 Z"
              fill="hsl(34 36% 85%)"
              stroke="hsl(35 30% 78%)"
              strokeWidth="0.5"
            />
          </svg>

          {/* Wax seal */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all ease-in-out ${
              isOpening
                ? 'duration-[600ms] opacity-0 scale-75 -top-4'
                : 'duration-300 opacity-100 scale-100 top-[85px]'
            }`}
            style={{ zIndex: 20 }}
          >
            {/* Wax seal shape */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              {/* Wavy wax border */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-lg">
                <path
                  d="M50,2 C55,8 62,5 67,10 C72,15 78,12 82,18 C86,24 92,24 95,30 
                     C98,36 98,43 98,50 C98,57 98,64 95,70 C92,76 86,76 82,82 
                     C78,88 72,85 67,90 C62,95 55,92 50,98 C45,92 38,95 33,90 
                     C28,85 22,88 18,82 C14,76 8,76 5,70 C2,64 2,57 2,50 
                     C2,43 2,36 5,30 C8,24 14,24 18,18 C22,12 28,15 33,10 
                     C38,5 45,8 50,2 Z"
                  fill="hsl(0 45% 35%)"
                />
                <path
                  d="M50,2 C55,8 62,5 67,10 C72,15 78,12 82,18 C86,24 92,24 95,30 
                     C98,36 98,43 98,50 C98,57 98,64 95,70 C92,76 86,76 82,82 
                     C78,88 72,85 67,90 C62,95 55,92 50,98 C45,92 38,95 33,90 
                     C28,85 22,88 18,82 C14,76 8,76 5,70 C2,64 2,57 2,50 
                     C2,43 2,36 5,30 C8,24 14,24 18,18 C22,12 28,15 33,10 
                     C38,5 45,8 50,2 Z"
                  fill="url(#sealGradient)"
                />
                <defs>
                  <radialGradient id="sealGradient" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="hsl(0 40% 45%)" />
                    <stop offset="100%" stopColor="hsl(0 45% 30%)" />
                  </radialGradient>
                </defs>
                {/* Inner ring */}
                <circle cx="50" cy="50" r="28" fill="none" stroke="hsl(0 35% 50% / 0.4)" strokeWidth="1.5" />
              </svg>
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="font-display text-sm sm:text-base font-semibold italic"
                  style={{ color: 'hsl(35 50% 85%)' }}
                >
                  B&F
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action text */}
        <p className={`text-center mt-8 text-sm tracking-[0.2em] uppercase font-sans text-muted-foreground transition-opacity duration-500 ${
          isOpening ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}>
          Toca para abrir
        </p>
      </div>
    </div>
  );
};

export default EnvelopeOpener;
