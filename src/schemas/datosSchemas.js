import PropTypes from "prop-types";

export const datosAccesoSchema = PropTypes.shape({
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  recordarPassword: PropTypes.bool.isRequired,
}).isRequired;
