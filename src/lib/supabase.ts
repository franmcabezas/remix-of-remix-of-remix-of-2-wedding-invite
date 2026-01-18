import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vduubpniwiyuqdvinsqq.supabase.co';
// TODO: Replace with your actual anon key from Supabase Dashboard > Settings > API
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXVicG5pd2l5dXFkdmluc3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NTUxMjAsImV4cCI6MjA4NDIzMTEyMH0.zfTR1x3UJ8NzS2TITZX9rMG6aIn_RS7T_GYSwegxKQA';

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
