import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('id');

  useEffect(() => {
    // If there's an ID parameter, redirect to the invitation page
    if (invitationId) {
      navigate(`/invitacion?id=${invitationId}`);
    }
  }, [invitationId, navigate]);

  // Show welcome page if no invitation ID
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gold-light" />
          <Heart className="w-6 h-6 text-gold fill-gold/20" />
          <div className="h-px w-16 bg-gold-light" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4 italic">
          María & Carlos
        </h1>
        
        <p className="text-lg font-serif text-gold mb-8">
          15 de Junio, 2025
        </p>
        
        <p className="text-muted-foreground mb-8">
          Para acceder a tu invitación personal, utiliza el enlace que te fue enviado.
        </p>
        
        <div className="flex items-center justify-center gap-3">
          <span className="text-gold text-sm">✦</span>
          <span className="text-gold text-sm">✦</span>
          <span className="text-gold text-sm">✦</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
