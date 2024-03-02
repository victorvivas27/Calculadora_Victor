
import "./BotonClear.css"
const BotonClear = ({children,clear}) => {
  return (
    <div className="boton-clear" onClick={clear}>{children}</div>
  )
}

export default BotonClear