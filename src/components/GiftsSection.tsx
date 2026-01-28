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
    <div className="py-10 text-center animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Gift className="w-5 h-5 text-gold" />
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-sans font-medium">
          Regalos
        </p>
      </div>
      
      <div className="relative max-w-md mx-auto">
        {/* Watercolor background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush/20 via-transparent to-peach/20 rounded-2xl blur-md" />
        
        <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gold-light/20 shadow-sm">
          <p className="font-serif text-lg text-foreground mb-8 leading-relaxed italic">
            Tu presencia es nuestro mejor regalo, pero si deseas colaborar con nuestra luna de miel:
          </p>
          
          <div className="space-y-4">
            <div className="bg-background/40 rounded-xl p-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2 font-sans">CBU</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-sm text-foreground font-mono break-all">{bankDetails.cbu}</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.cbu, 'cbu')}
                  className="flex-shrink-0 hover:bg-gold/10"
                >
                  {copiedField === 'cbu' ? (
                    <Check className="w-4 h-4 text-sage" />
                  ) : (
                    <Copy className="w-4 h-4 text-gold" />
                  )}
                </Button>
              </div>
            </div>
            
            <div className="bg-background/40 rounded-xl p-4">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2 font-sans">Alias</p>
              <div className="flex items-center justify-between gap-2">
                <code className="text-sm text-foreground font-mono">{bankDetails.alias}</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.alias, 'alias')}
                  className="flex-shrink-0 hover:bg-gold/10"
                >
                  {copiedField === 'alias' ? (
                    <Check className="w-4 h-4 text-sage" />
                  ) : (
                    <Copy className="w-4 h-4 text-gold" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
