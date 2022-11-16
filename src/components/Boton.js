import React from "react";
import '../style-sheets/Boton.css'

function Button(props) {

  const isOperation = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  return (
    <div className={`con-button ${isOperation(props.value) ? 'operation' : ''}`.trimEnd()}
      onClick={() => props.clic(props.value)}>
      {/* trimEnd elemina espacios en blanco detras de una cadena de caracteres */}
      {props.value}
    </div>
  )
}

export default Button;
