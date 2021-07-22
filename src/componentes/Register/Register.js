import "./Register.css";
export const Register = () => {
  return (
    <>
      <div className="container-xl contenedorPrincipal-Login">
        <div className="login-center row row-cols-2">
          <form className="form">
            <div className="form-group col">
            <label htmlFor="username">Usuario:</label>
            <p></p>
            <input
              type="text"
              className="form-control"
              id="username"
            />
            </div>
            <div className="form-group col">
              <label htmlFor="foto">Foto</label>
              <p></p>
              <input
                type="text"
                className="form-control"
                id="username"
              />
            </div>
            <div className="form-group col">
              <p></p>
              <label htmlFor="password">Contraseña:</label>
              <p></p>
              <input
                type="password"
                id="password"
                className="form-control"
              />
            </div>
            <p></p>
            <div className="form-group col">
              <p></p>
              <label htmlFor="location">Localización:</label>
              <p></p>
              <input
                type="location"
                id="location"
                className="form-control"
              />
            </div>
            <p></p>
            <div className="form-group col">
              <p></p>
              <label htmlFor="email">Correo electrónico:</label>
              <p></p>
              <input
                type="email"
                id="email"
                className="form-control"
              />
            </div>
            <p></p>
            <div className="boton-login col">
              <button className="btn-primary btn-lg "> Registrarme </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
