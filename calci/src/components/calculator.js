import { useState } from "react"
import "../App.css"
const Calculator=()=>{
    const [value,setValue]=useState([])
    
    return(
     <div className="main">
     <h1 className="heading">Calculator</h1>
     <div className="display">
     <div className="display-bar">{value}</div>
     <div  onClick={()=>{setValue("")}}>c</div>
     <div className="digit" onClick={()=>{setValue(1)}}>1</div>
     <div className="digit"  onClick={()=>{setValue(2)}} >2</div>
     <div className="digit"  onClick={()=>{setValue(3)}}>3</div>
     <div className="digit"  onClick={()=>{setValue("/")}}>/</div>
     <div className="digit"  onClick={()=>{setValue(4)}}>4</div>
     <div className="digit"  onClick={()=>{setValue(5)}}>5</div>
     <div className="digit"  onClick={()=>{setValue(6)}}>6</div>
     <div className="digit"  onClick={()=>{setValue("-")}}>-</div>
     <div className="digit"  onClick={()=>{setValue(7)}}>7</div>
     <div className="digit"  onClick={()=>{setValue(8)}}>8</div>
     <div className="digit"  onClick={()=>{setValue(9)}}>9</div>
     <div className="digit"  onClick={()=>{setValue("+")}}>+</div>
     <div  className="digit"  onClick={()=>{setValue(".")}}>.</div> 
     <div className="digit"  onClick={()=>{setValue(0)}}>0</div>
     <div className="digit"  onClick={()=>{setValue("=")}}>=</div>
     <div className="digit"  onClick={()=>{setValue("*")}}>*</div>

     </div>
     </div>
    )
}
export default Calculator