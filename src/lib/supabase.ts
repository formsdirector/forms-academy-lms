import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkuojnbdvljhqiebiabi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrdW9qbmJkdmxqaHFpZWJpYWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3MTAzMTcsImV4cCI6MjA5MjI4NjMxN30.5MUmInr4IcSgZAwb0KkEhISeemOr9J7zQhN6a3HzFKE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
