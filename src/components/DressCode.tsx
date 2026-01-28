import { Shirt } from 'lucide-react';

const DressCode = () => {
  return (
    <div className="py-8 text-center animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Shirt className="w-5 h-5 text-gold" />
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">
          Código de Vestimenta
        </p>
      </div>
      
      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-gold-light/30 max-w-md mx-auto">
        <h3 className="font-serif text-2xl text-foreground mb-4">Formal</h3>
        
        <div className="space-y-2 text-muted-foreground">
          <p className="text-sm">
            Por favor, evitar prendas de color <span className="font-medium text-foreground">blanco</span>
          </p>
          <p className="text-sm">
            y trajes completamente <span className="font-medium text-foreground">azules</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
