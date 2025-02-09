import React from "react";
import { useCookies } from "react-cookie";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const setSession = (userData) => {
    setCookie("userData", userData, {
      path: "/",
      maxAge: 300, //5minutes
    });
  };

  const getSession = () => {
    const userData = cookies.userData || null;
    return userData;
  };
//remove the user data from the cookies
  const logout = () => {
    removeCookie("userData", { path: "/" });
  };

  return (
    <AppContext.Provider
      value={{
        setSession,
        getSession,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;