import AuthService from '../services/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    const userData = await AuthService.signUp(email, password);
    setUser(userData);
  };

  const signIn = async (email, password) => {
    const userData = await AuthService.signIn(email, password);
    setUser(userData);
  };

  const signOut = async () => {
    await AuthService.signOut();
    setUser(null);
  };

  const signInWithProvider = async (provider) => {
    const userData = await AuthService.signInWithProvider(provider);
    setUser(userData);
  }
  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, signInWithProvider }}>
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
