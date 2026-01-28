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
      <div className="relative max-w-sm mx-auto">
        {/* Watercolor background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-peach/30 via-transparent to-blush/30 rounded-2xl blur-md" />
        
        <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-10 border border-gold-light/20 text-center shadow-sm">
          <h3 className="text-2xl font-display text-foreground mb-2 italic">
            Confirmar Asistencia
          </h3>
          <p className="text-sm text-muted-foreground mb-8 font-sans">
            ¿Cuántas personas asistirán?
          </p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <button
              type="button"
              onClick={handleDecrement}
              disabled={confirmedGuests === 0}
              className="w-14 h-14 rounded-full border-2 border-gold-light flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Minus className="w-5 h-5" />
            </button>
            
            <span className="text-6xl font-display font-light text-foreground min-w-[4rem]">
              {confirmedGuests}
            </span>
            
            <button
              type="button"
              onClick={handleIncrement}
              disabled={confirmedGuests >= maxGuests}
              className="w-14 h-14 rounded-full border-2 border-gold-light flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-muted-foreground mb-8 font-sans tracking-wide">
            Máximo {maxGuests} {maxGuests === 1 ? 'persona' : 'personas'}
          </p>

          {error && (
            <p className="text-destructive text-sm mb-4 font-sans">{error}</p>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold/90 hover:to-gold-light/90 text-primary-foreground font-sans uppercase tracking-[0.2em] text-xs py-6 rounded-xl shadow-md transition-all duration-300"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Send className="w-4 h-4 mr-2" />
            )}
            {confirmedGuests === 0 ? 'No podré asistir' : 'Confirmar Asistencia'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RSVPForm;
