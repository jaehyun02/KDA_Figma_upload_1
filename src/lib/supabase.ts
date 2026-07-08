import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function saveInquiry(input: {
  name: string;
  email: string;
  message: string;
}) {
  if (!supabase) {
    throw new Error(
      "Supabase 환경 변수가 설정되지 않았습니다. VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 설정하세요.",
    );
  }

  const { error } = await supabase.from("submissions").insert([
    {
      name: input.name,
      email: input.email,
      message: input.message,
    },
  ]);

  if (error) {
    throw error;
  }
}
