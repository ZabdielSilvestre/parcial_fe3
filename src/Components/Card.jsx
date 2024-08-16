//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import PropTypes from 'prop-types';
function Card({ modelo, año }) {
  return (
    <div>
      <h2>Tu automovil favorito</h2>
      <p>
        <strong>Modelo:</strong> {modelo}
      </p>
      <p>
        <strong>año:</strong> {año}
      </p>
    </div>
  );
}

Card.propTypes = {
  modelo: PropTypes.string.isRequired,
  año: PropTypes.string.isRequired,
};

export default Card;
