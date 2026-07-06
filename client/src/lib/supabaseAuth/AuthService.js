import { supabase } from './supabaseClient';

const Signup = async (name, email, password) => {
  const redirectTo = typeof window !== 'undefined' ? `${window.location.origin}/login` : undefined;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
      ...(redirectTo ? { emailRedirectTo: redirectTo } : {}),
    },
  });

  if (error) throw error;
  return data;
};

const Signin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

const signInWithGoogle = async () => {
  const redirectTo = typeof window !== 'undefined' ? `${window.location.origin}/` : undefined;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      
      flowType: 'pkce',
    },
  });

  if (error) throw error;
  return data;
};

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export { signInWithGoogle, logout, Signup, Signin };