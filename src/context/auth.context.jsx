import React from "react";
export const AuthContext = React.createContext(null);
import toast from "react-hot-toast";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

   
     
      if (!response.ok) {
         const error = await response.json();
            console.log("response====error======", error);
         toast.error(error?.message || "Login failed. Please try again.");
      }

      const data = await response.json();
      setUser(data.data.user);
      localStorage.setItem("token", data.data.token);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
