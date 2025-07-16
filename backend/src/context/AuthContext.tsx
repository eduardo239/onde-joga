import { auth } from "../firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./useAuth";
import { FirebaseError } from "firebase/app";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login feito com sucesso!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        //  setError(error.message);
      } else {
        //  setError("Erro desconhecido");
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        logout,
        login,
        signInWithGoogle,
        signInWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
