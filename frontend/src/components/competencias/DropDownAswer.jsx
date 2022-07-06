import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export const DropDownAswer = () => {
     const [val, setVal] = useState();
     console.log(val);
  return (
      <>
      <div> 
            <Form.Select value={val} onChange={(e) => setVal(e.target.value)}>
                <option>Selecciona la opción que mejor califique a la persona</option>
                <option value="1">No Muestra</option>
                <option value="2">En desarrollo</option>
                <option value="3">Competente</option>
                <option value="4">Modelo a seguir</option>
            </Form.Select>
        </div>
      </>
  )
}
