// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fyedrsctmjppvfzceclq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5ZWRyc2N0bWpwcHZmemNlY2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MDUwODEsImV4cCI6MjA1MDQ4MTA4MX0.9IXNdrS0Q4-tzN6RZQmuNv92ESN5r9io6UVq-JPdEKU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);