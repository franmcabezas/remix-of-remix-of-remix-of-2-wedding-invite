import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase, Invitation } from '@/lib/supabase';
import WeddingHeader from '@/components/WeddingHeader';
import GuestList from '@/components/GuestList';
import RSVPForm from '@/components/RSVPForm';
import ThankYouMessage from '@/components/ThankYouMessage';
import WeddingFooter from '@/components/WeddingFooter';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';

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
    // Re-fetch to get updated data
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
      {/* Decorative background pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative container max-w-2xl mx-auto px-6 py-8">
        <WeddingHeader />
        
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
