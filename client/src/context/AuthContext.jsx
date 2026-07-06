import { signInWithGoogle, logout, Signup, Signin } from '@/lib/supabaseAuth/AuthService';
import { supabase } from '@/lib/supabaseAuth/supabaseClient';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (isMounted) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (name, email, password) => {
    const data = await Signup(name, email, password);
    setUser(data?.user ?? null);
    return data;
  };

  const signIn = async (email, password) => {
    const data = await Signin(email, password);
    setUser(data?.user ?? null);
    return data;
  };

  const signInWithgoogle = async () => {
    const data = await signInWithGoogle();
    return data;
  };

  const signOutUser = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithgoogle, signOutUser, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
