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
      {/* Fixed floral decorations - apricot/peach tones */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top left flower cluster */}
        <svg className="absolute -top-10 -left-10 w-64 h-64 opacity-20" viewBox="0 0 200 200" fill="none">
          <circle cx="60" cy="60" r="25" fill="#FFCBA4" />
          <circle cx="45" cy="50" r="18" fill="#FFB88C" />
          <circle cx="75" cy="45" r="20" fill="#FFDAB9" />
          <circle cx="55" cy="75" r="15" fill="#FFD4A3" />
          <circle cx="80" cy="70" r="22" fill="#FFCBA4" />
          <circle cx="40" cy="80" r="12" fill="#FFB88C" />
          <circle cx="90" cy="55" r="16" fill="#FFDAB9" />
        </svg>
        
        {/* Top right flower */}
        <svg className="absolute -top-5 -right-16 w-56 h-56 opacity-15" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="80" rx="35" ry="30" fill="#FFDAB9" />
          <ellipse cx="80" cy="100" rx="28" ry="25" fill="#FFB88C" />
          <ellipse cx="120" cy="95" rx="30" ry="28" fill="#FFCBA4" />
          <ellipse cx="95" cy="115" rx="22" ry="20" fill="#FFD4A3" />
        </svg>
        
        {/* Bottom left flower */}
        <svg className="absolute bottom-32 -left-12 w-48 h-48 opacity-15" viewBox="0 0 200 200" fill="none">
          <circle cx="80" cy="100" r="30" fill="#FFCBA4" />
          <circle cx="60" cy="85" r="22" fill="#FFB88C" />
          <circle cx="100" cy="80" r="25" fill="#FFDAB9" />
          <circle cx="70" cy="120" r="18" fill="#FFD4A3" />
        </svg>
        
        {/* Bottom right flower cluster */}
        <svg className="absolute bottom-40 -right-8 w-52 h-52 opacity-20" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="28" fill="#FFDAB9" />
          <circle cx="80" cy="90" r="20" fill="#FFCBA4" />
          <circle cx="120" cy="85" r="24" fill="#FFB88C" />
          <circle cx="90" cy="120" r="16" fill="#FFD4A3" />
          <circle cx="115" cy="115" r="18" fill="#FFCBA4" />
        </svg>
        
        {/* Small accent petals scattered */}
        <svg className="absolute top-1/3 -left-4 w-24 h-24 opacity-10" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="20" ry="35" fill="#FFB88C" transform="rotate(-30 50 50)" />
          <ellipse cx="50" cy="50" rx="20" ry="35" fill="#FFDAB9" transform="rotate(30 50 50)" />
        </svg>
        
        <svg className="absolute top-1/2 -right-6 w-28 h-28 opacity-10" viewBox="0 0 100 100" fill="none">
          <ellipse cx="50" cy="50" rx="18" ry="32" fill="#FFCBA4" transform="rotate(15 50 50)" />
          <ellipse cx="50" cy="50" rx="18" ry="32" fill="#FFD4A3" transform="rotate(-45 50 50)" />
        </svg>
      </div>
      
      <div className="relative container max-w-2xl mx-auto px-6 py-8 pb-24">
        {/* Video Player */}
        <VideoPlayer 
          principalSrc="/principal.m4a"
          fiestaSrc="/fiesta.m4a"
        />
        
        {/* Header with names, date, location */}
        <WeddingHeader />
        
        {/* Countdown */}
        <Countdown targetDate={WEDDING_DATE} />
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-px w-16 bg-gold-light" />
          <span className="text-gold text-sm">✦</span>
          <div className="h-px w-16 bg-gold-light" />
        </div>
        
        {/* Timeline */}
        <Timeline />
        
        {/* Dress Code */}
        <DressCode />
        
        {/* Gifts */}
        <GiftsSection />
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div className="h-px w-16 bg-gold-light" />
          <span className="text-gold text-sm">✦</span>
          <div className="h-px w-16 bg-gold-light" />
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
