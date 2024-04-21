// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_PROJECT,
//     process.env.NEXT_PUBLIC_ANON_KEY
// );

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gtdtyawmlhltmzqpfris.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)