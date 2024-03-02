import "./Boton.css"

const Boton = ({ children,clik }) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`.trimEnd()
      
      } onClick={()=>clik(children)}>
      {children}
    </div>
  );
};

export default Boton;
