import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if environment variables are present. Otherwise export null.
let client: SupabaseClient | null = null;
if (typeof supabaseUrl === 'string' && supabaseUrl.length > 0 &&
    typeof supabaseAnonKey === 'string' && supabaseAnonKey.length > 0) {
  client = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = client; 