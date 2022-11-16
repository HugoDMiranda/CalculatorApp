import React from "react";
import '../style-sheets/BotonClear.css'

function BotonClear(props) {
  return(
    <div className="button-clear"
    onClick={props.clear}>
      {props.value}
    </div>
  )
}

export default BotonClear;