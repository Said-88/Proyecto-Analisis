import { auth } from "../fire";
import {  createContext, useContext ,useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";


export const authContext = createContext(); // <-- fixed


export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("AuthContextProvider not found");
  return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
     const responseGoogle =  new GoogleAuthProvider();
    return signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  

  return (
    <authContext.Provider value={{ signup, login, loginWithGoogle, logout, user, loading, resetPassword}}>
      {children}
    </authContext.Provider>
  );
};
