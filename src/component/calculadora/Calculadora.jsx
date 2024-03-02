import logo from "/img/victor.png";
import "./Calculadora.css";
import Boton from "../boton/Boton";
import Pantalla from "../pantalla/Pantalla";
import BotonClear from "../botonClear/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";
const Calculadora = () => {
  const [input, setInput] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para mostrar mensajes

  const agregarInput = (valor) => {
    setInput(input + valor);
    // Limpiar el mensaje cuando se agrega un nuevo número
    setMensaje("");
  }

  const calcularResultado = () => {
    try {
      if (input) {
        // Verificar si la expresión es 0/0
        if (input === "0/0") {
          throw new Error("División por cero no permitida");
        }
        setInput(evaluate(input));
        // Limpiar el mensaje cuando se realiza una operación válida
        setMensaje("");
      } else {
        setMensaje("Por favor, ingrese un valor");
      }
    } catch (error) {
      setMensaje(error.message); // Mostrar mensaje de error personalizado
    }
  }

  return (
    <div className="contenedor-calculadora">
      <div className="contenedor-logo">
        <img src={logo} alt="" />
      </div>
      <div className="calculadora">
        <Pantalla input={input} />
        <div className="mensaje" style={{color:"red",fontSize:9}}>{mensaje}</div> {/* Mostrar mensaje aquí */}
        <div className="fila">
          <Boton clik={agregarInput}>1</Boton>
          <Boton clik={agregarInput}>2</Boton>
          <Boton clik={agregarInput}>3</Boton>
          <Boton clik={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton clik={agregarInput}>4</Boton>
          <Boton clik={agregarInput}>5</Boton>
          <Boton clik={agregarInput}>6</Boton>
          <Boton clik={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton clik={agregarInput}>7</Boton>
          <Boton clik={agregarInput}>8</Boton>
          <Boton clik={agregarInput}>9</Boton>
          <Boton clik={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton clik={calcularResultado}>=</Boton>
          <Boton clik={agregarInput}>0</Boton>
          <Boton clik={agregarInput}>.</Boton>
          <Boton clik={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear clear={() => { setInput(""); setMensaje(""); }}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
