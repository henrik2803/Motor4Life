import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://tihbrfinoufmbgxezhzt.supabase.co";

const supabaseKey =
  "sb_publishable_IHnS5JMcpeUL3f0ESIQBRg_gQO5Cjjb";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);