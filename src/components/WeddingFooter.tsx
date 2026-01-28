import { Heart } from 'lucide-react';

const WeddingFooter = () => {
  return (
    <footer className="py-16 text-center animate-fade-in animate-delay-400">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-light/50" />
        <Heart className="w-5 h-5 text-gold fill-gold/20" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-light/50" />
      </div>
      
      <p className="text-base text-muted-foreground font-serif italic leading-relaxed max-w-sm mx-auto">
        Con amor y gratitud por compartir este día especial con nosotros
      </p>
      
      <div className="flex items-center justify-center gap-2 mt-8">
        <span className="text-gold/60 text-xs">❧</span>
        <span className="text-gold/60 text-xs">❧</span>
        <span className="text-gold/60 text-xs">❧</span>
      </div>
    </footer>
  );
};

export default WeddingFooter;
