import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vduubpniwiyuqdvinsqq.supabase.co';
// TODO: Replace with your actual anon key from Supabase Dashboard > Settings > API
const supabaseAnonKey = 'YOUR_ANON_KEY_HERE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Invitation {
  id: string;
  family_name: string;
  guests: string[];
  max_guests: number;
  confirmed_guests: number | null;
  responded_at: string | null;
  created_at: string;
}
