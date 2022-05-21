import React,{useState} from 'react'

function Calculator() {
    const [historyvalue , sethistoryvalue] = useState("");
    const [outputvalue, setoutputvalue] = useState("Ans");

    const display = (event)=>{
        sethistoryvalue(historyvalue +event.target.name);
    }

    const calculate = ()=>{
        try{
            setoutputvalue((eval(historyvalue)).toString());
            sethistoryvalue((eval(historyvalue)).toString());
        }
        catch(error){
            sethistoryvalue(historyvalue.slice(0,-2));
        }
    }

    const clear =()=>{
        sethistoryvalue("");
        setoutputvalue("Ans");
    }

    const backspace =()=>{
        sethistoryvalue(historyvalue.slice(0,-1));
    }

   
  return (
      <>
           <div className="calculator">

            <div id="result">
                <div id="history">
                    <input type="none" id="history-value" disabled placeholder="0" value={historyvalue}/>
                </div>

                <div id="output">
                    <p id="output-value">{outputvalue}</p>
                </div>
            </div>

            <div id="keyboard">
                <button className="operator" id="clear" onClick={clear}>C</button>
                <button className="operator" id="delete" onClick={backspace} ><i className="material-icons" style={{fontSize:"36px"}}>backspace</i></button>
                <button className="operator" name= "%" onClick={display} >%</button>
                <button className="operator" name="/" onClick={display}> &#247;</button>
                <button className="number" name="7" onClick={display}>7</button>
                <button className="number"  name="8" onClick={display}>8</button>
                <button className="number"  name="9" onClick={display} >9</button>
                <button className="operator"  name="*" onClick={display} > x</button>
                <button className="number"  name="6" onClick={display} >6</button>
                <button className="number"  name="5" onClick={display} >5</button>
                <button className="number"  name="4" onClick={display} >4</button>
                <button className="operator"  name="-" onClick={display} >-</button>
                <button className="number"  name="1" onClick={display} >1</button>
                <button className="number"  name="2" onClick={display} >2</button>
                <button className="number"  name="3" onClick={display} >3</button>
                <button className="operator" name="+" onClick={display} >+</button>
                <button className="number" name="00" onClick={display}>00</button>
                <button className="number" name="0" onClick={display} >0</button>
                <button className="operator" onClick={calculate} >=</button>
            </div>

         </div>

         </>

  )
}

export default Calculator