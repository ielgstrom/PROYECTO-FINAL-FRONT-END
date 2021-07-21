import { FaPaperPlane } from "react-icons/fa";
import "./Chat.css";
export const Chat = () => {
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaChat">CHAT</h2>
        <div className="containerChat"></div>
        <form className=" d-flex flex-row">
          <input
            type="text"
            className="inputChat form-control form-control-md"
            placeholder="Escribe un mensaje"
          ></input>
          <FaPaperPlane className="enviarAvion" />
        </form>
      </div>
    </>
  );
};
export default Chat;
