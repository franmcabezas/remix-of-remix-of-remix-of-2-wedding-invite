import { Shirt } from 'lucide-react';
import dressSketch from '@/assets/dress-sketch.png';
import suitSketch from '@/assets/suit-sketch.png';

const DressCode = () => {
  return (
    <div className="py-10 text-center animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Shirt className="w-5 h-5 text-gold" />
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-sans font-medium">
          Código de Vestimenta
        </p>
      </div>
      
      <div className="relative max-w-md mx-auto">
        {/* Watercolor background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-transparent to-blush/20 rounded-2xl blur-md" />
        
        <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gold-light/20 shadow-sm">
          <h3 className="font-display text-3xl text-foreground mb-5 italic">Formal</h3>
          
          {/* Dress and Suit illustrations */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <img src={dressSketch} alt="Vestido formal" className="w-24 h-28 object-contain opacity-70" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={suitSketch} alt="Traje formal" className="w-24 h-28 object-contain opacity-70" />
            </div>
          </div>
          
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm font-sans leading-relaxed">
              Por favor, evitar prendas de color <span className="font-medium text-foreground">blanco</span>
            </p>
            <p className="text-sm font-sans leading-relaxed">
              y trajes completamente <span className="font-medium text-foreground">azules</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
