import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = (props) => {
  const token = localStorage.getItem("token");
  const [login, setLogin] = useState(!!token);
  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);
  const { children } = props;
  const loguearUsuario = () => {
    setLogin(true);
  };
  const desloguearUsuario = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.setItem("login", false);
    setLogin(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ login, token, loguearUsuario, desloguearUsuario }}
    >
      {children}
    </AuthContext.Provider>
  );
};
