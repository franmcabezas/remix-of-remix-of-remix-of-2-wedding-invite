import { Gift, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const GiftsSection = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    cbu: '0000003100010000000001',
    alias: 'FRAN.BELU.BODA',
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.success('Copiado al portapapeles');
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      toast.error('Error al copiar');
    }
  };

  return (
    <div className="py-8 text-center animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Gift className="w-5 h-5 text-gold" />
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-sans">
          Regalos
        </p>
      </div>
      
      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-gold-light/30 max-w-md mx-auto">
        <p className="font-serif text-lg text-foreground mb-6">
          Tu presencia es nuestro mejor regalo, pero si deseas colaborar con nuestra luna de miel:
        </p>
        
        <div className="space-y-4">
          <div className="bg-background/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">CBU</p>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm text-foreground font-mono break-all">{bankDetails.cbu}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(bankDetails.cbu, 'cbu')}
                className="flex-shrink-0"
              >
                {copiedField === 'cbu' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gold" />
                )}
              </Button>
            </div>
          </div>
          
          <div className="bg-background/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Alias</p>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm text-foreground font-mono">{bankDetails.alias}</code>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(bankDetails.alias, 'alias')}
                className="flex-shrink-0"
              >
                {copiedField === 'alias' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-gold" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
