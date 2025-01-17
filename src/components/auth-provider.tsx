import { useLocalStorage } from "@/hooks/use-storage";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";
import { useNavigate } from "react-router";

const IS_AUTH_KEY = "CASTALYZE::IS_AUTH";

interface AuthContextValue {
  isLogged: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLogged, setIsLogged] = useLocalStorage(IS_AUTH_KEY, false);
  const navigate = useNavigate();

  const signIn = useCallback(() => {
    setIsLogged(true);
    navigate("/");
  }, [navigate, setIsLogged]);

  const signOut = useCallback(() => {
    setIsLogged(false);
  }, [setIsLogged]);

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
