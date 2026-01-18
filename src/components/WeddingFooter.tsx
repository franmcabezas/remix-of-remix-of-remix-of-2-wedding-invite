import { Heart } from 'lucide-react';

const WeddingFooter = () => {
  return (
    <footer className="py-12 text-center animate-fade-in animate-delay-400">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-gold text-sm">✦</span>
        <Heart className="w-4 h-4 text-gold fill-gold/30" />
        <span className="text-gold text-sm">✦</span>
      </div>
      
      <p className="text-sm text-muted-foreground font-serif italic">
        Con amor y gratitud por compartir este día especial con nosotros
      </p>
    </footer>
  );
};

export default WeddingFooter;
