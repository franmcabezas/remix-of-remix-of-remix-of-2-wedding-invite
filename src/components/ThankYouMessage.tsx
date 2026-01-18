import { CheckCircle2, Heart, Calendar } from 'lucide-react';

interface ThankYouMessageProps {
  confirmedGuests: number;
  familyName: string;
}

const ThankYouMessage = ({ confirmedGuests, familyName }: ThankYouMessageProps) => {
  const isAttending = confirmedGuests > 0;

  return (
    <div className="text-center animate-fade-in">
      <div className="bg-card rounded-lg p-10 border border-gold-light/30 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
          {isAttending ? (
            <CheckCircle2 className="w-8 h-8 text-gold" />
          ) : (
            <Heart className="w-8 h-8 text-gold" />
          )}
        </div>
        
        <h2 className="text-3xl font-serif font-light text-foreground mb-4">
          ¡Gracias, Familia {familyName}!
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
              <span className="text-sm uppercase tracking-wider">15 de Junio, 2025</span>
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
