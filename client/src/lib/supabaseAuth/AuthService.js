import supabase from './supabaseClient'

const AuthService = {
  async signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    return user
  },
  async signIn(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password })
    if (error) throw error
    return user
  },
    async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },
  async signInWithProvider(provider) {
    const { user, error } = await supabase.auth.signInWithProvider({ provider })
    if (error) throw error
    return user
  }
}
export default AuthService