import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Redireccion = (props) => {
  const { children, login } = props;
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/login");
      return;
    }
  }, [login, history]);
  return children;
};
export default Redireccion;
