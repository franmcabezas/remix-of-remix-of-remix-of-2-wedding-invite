import { CheckCircle2, Heart, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThankYouMessageProps {
  confirmedGuests: number;
  familyName: string;
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const ThankYouMessage = ({ confirmedGuests, familyName }: ThankYouMessageProps) => {
  const isAttending = confirmedGuests > 0;
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isAttending) {
      const colors = ['#D4A574', '#E8C4A0', '#C9A86C', '#F5D6BA', '#9CAF88'];
      const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(pieces);

      const timer = setTimeout(() => setConfetti([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [isAttending]);

  return (
    <div className="text-center animate-fade-in relative">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-confetti pointer-events-none"
          style={{
            left: `${piece.left}%`,
            top: '-10px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}

      <div className="bg-card rounded-lg p-10 border border-gold-light/30 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          {isAttending ? (
            <CheckCircle2 className="w-8 h-8 text-gold" />
          ) : (
            <Heart className="w-8 h-8 text-gold" />
          )}
        </div>
        
        <h2 className="text-3xl font-serif font-light text-foreground mb-4">
          {isAttending ? '¡Gracias por confirmar!' : `¡Gracias, Familia ${familyName}!`}
        </h2>
        
        {isAttending ? (
          <>
            <p className="text-muted-foreground mb-6">
              Hemos recibido tu confirmación. 
              {confirmedGuests === 1 
                ? ' Te esperamos con mucha ilusión.'
                : ` Les esperamos con mucha ilusión a los ${confirmedGuests}.`
              }
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gold">
              <Calendar className="w-4 h-4" />
              <span className="text-sm uppercase tracking-wider">16 de Mayo, 2026</span>
            </div>
          </>
        ) : (
          <p className="text-muted-foreground">
            Lamentamos que no puedas acompañarnos, pero te agradecemos habernos avisado. 
            ¡Te tendremos presente en nuestro día especial!
          </p>
        )}
        
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px w-12 bg-gold-light" />
          <Heart className="w-4 h-4 text-gold fill-gold/20" />
          <div className="h-px w-12 bg-gold-light" />
        </div>
      </div>
    </div>
  );
};

export default ThankYouMessage;
