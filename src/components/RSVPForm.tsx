import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { Minus, Plus, Send, Loader2 } from 'lucide-react';

interface RSVPFormProps {
  invitationId: string;
  maxGuests: number;
  onSuccess: () => void;
}

const RSVPForm = ({ invitationId, maxGuests, onSuccess }: RSVPFormProps) => {
  const [confirmedGuests, setConfirmedGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleIncrement = () => {
    if (confirmedGuests < maxGuests) {
      setConfirmedGuests(prev => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (confirmedGuests > 0) {
      setConfirmedGuests(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { error: updateError } = await supabase
        .from('invitations')
        .update({
          confirmed_guests: confirmedGuests,
          responded_at: new Date().toISOString(),
        })
        .eq('id', invitationId);

      if (updateError) {
        throw updateError;
      }

      onSuccess();
    } catch (err) {
      console.error('Error updating invitation:', err);
      setError('Hubo un error al confirmar. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up animate-delay-200">
      <div className="bg-card rounded-lg p-8 border border-gold-light/30 max-w-sm mx-auto text-center">
        <h3 className="text-xl font-serif text-foreground mb-2">
          Confirmar Asistencia
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          ¿Cuántas personas asistirán?
        </p>

        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={confirmedGuests === 0}
            className="w-12 h-12 rounded-full border-2 border-gold-light flex items-center justify-center text-gold hover:bg-gold/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Minus className="w-5 h-5" />
          </button>
          
          <span className="text-5xl font-serif font-light text-foreground min-w-[3rem]">
            {confirmedGuests}
          </span>
          
          <button
            type="button"
            onClick={handleIncrement}
            disabled={confirmedGuests >= maxGuests}
            className="w-12 h-12 rounded-full border-2 border-gold-light flex items-center justify-center text-gold hover:bg-gold/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground mb-6">
          Máximo {maxGuests} {maxGuests === 1 ? 'persona' : 'personas'}
        </p>

        {error && (
          <p className="text-destructive text-sm mb-4">{error}</p>
        )}

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-sans uppercase tracking-widest text-sm py-6"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Send className="w-4 h-4 mr-2" />
          )}
          {confirmedGuests === 0 ? 'No podré asistir' : 'Confirmar Asistencia'}
        </Button>
      </div>
    </form>
  );
};

export default RSVPForm;
