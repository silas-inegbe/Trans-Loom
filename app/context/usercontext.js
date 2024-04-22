/**
 * UserContext is a React context that provides user-related data and functions.
 * @type {React.Context}
 */
"use client"
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();


export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
  
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(auth));
    setUser(user);
    console.log("user", user, "auth", auth);
  }, []);
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}