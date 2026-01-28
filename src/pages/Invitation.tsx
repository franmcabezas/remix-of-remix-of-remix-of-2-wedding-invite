import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase, Invitation } from '@/lib/supabase';
import WeddingHeader from '@/components/WeddingHeader';
import VideoPlayer from '@/components/VideoPlayer';
import Countdown from '@/components/Countdown';
import Timeline from '@/components/Timeline';
import DressCode from '@/components/DressCode';
import GiftsSection from '@/components/GiftsSection';
import GuestList from '@/components/GuestList';
import RSVPForm from '@/components/RSVPForm';
import ThankYouMessage from '@/components/ThankYouMessage';
import WeddingFooter from '@/components/WeddingFooter';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import watercolorTop from '@/assets/watercolor-flowers-top.png';
import watercolorBottom from '@/assets/watercolor-flowers-bottom.png';

const WEDDING_DATE = new Date('2026-05-16T17:00:00');

const InvitationPage = () => {
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('id');
  
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasResponded, setHasResponded] = useState(false);

  useEffect(() => {
    const fetchInvitation = async () => {
      if (!invitationId) {
        setError('No se proporcionó un ID de invitación');
        setLoading(false);
        return;
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('invitations')
          .select('*')
          .eq('id', invitationId)
          .maybeSingle();

        if (fetchError) {
          throw fetchError;
        }

        if (!data) {
          setError('Invitación no encontrada');
        } else {
          setInvitation(data);
          setHasResponded(!!data.responded_at);
        }
      } catch (err) {
        console.error('Error fetching invitation:', err);
        setError('Error al cargar la invitación');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, [invitationId]);

  const handleRSVPSuccess = () => {
    setHasResponded(true);
    if (invitation) {
      setInvitation(prev => prev ? {
        ...prev,
        responded_at: new Date().toISOString()
      } : null);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !invitation) {
    return <ErrorState message={error || undefined} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed watercolor floral decorations - full width responsive */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top decoration - single image, full width */}
        <img 
          src={watercolorTop} 
          alt="" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl opacity-70 animate-float"
          style={{ animationDelay: '0s' }}
        />
        
        {/* Bottom decoration - single image, full width */}
        <img 
          src={watercolorBottom} 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl opacity-70 animate-float"
          style={{ animationDelay: '1.5s' }}
        />
      </div>
      
      <div className="relative container max-w-2xl mx-auto px-6 py-8 pb-28">
        {/* Video Player */}
        <VideoPlayer 
          principalSrc="/principal.m4a"
          fiestaSrc="/fiesta.m4a"
        />
        
        {/* Header with names, date, location */}
        <WeddingHeader />
        
        {/* Countdown */}
        <Countdown targetDate={WEDDING_DATE} />
        
        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-light/60" />
          <span className="text-gold text-sm font-serif">✿</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-light/60" />
        </div>
        
        {/* Timeline */}
        <Timeline />
        
        {/* Dress Code */}
        <DressCode />
        
        {/* Gifts */}
        <GiftsSection />
        
        {/* Elegant divider */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-light/60" />
          <span className="text-gold text-sm font-serif">✿</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-light/60" />
        </div>
        
        <main className="py-8">
          <GuestList 
            familyName={invitation.family_name}
            guests={invitation.guests}
            maxGuests={invitation.max_guests}
          />
          
          {hasResponded ? (
            <ThankYouMessage 
              confirmedGuests={invitation.confirmed_guests || 0}
              familyName={invitation.family_name}
            />
          ) : (
            <RSVPForm 
              invitationId={invitation.id}
              maxGuests={invitation.max_guests}
              onSuccess={handleRSVPSuccess}
            />
          )}
        </main>
        
        <WeddingFooter />
      </div>
    </div>
  );
};

export default InvitationPage;
