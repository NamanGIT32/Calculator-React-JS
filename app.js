import React from "react";
import ReactDOM from "react-dom/client";

const root= ReactDOM.createRoot(document.getElementById("root"));
import { useState } from "react";
var TxtValue;
const AppLayout= ()=>{
    const [text,setText] = useState("");
    return (
        <>
        <div className="outer"> 
            <h1>Calculator</h1>
        </div>
        <div className="container">
            <div className="display">
                <input type="text" value={text} onChange={(e)=>{
                    TxtValue=e.target.value;
                    setText(e.target.value)
                }}/>
            </div>
            <div className="calculator-buttons">
                <input type="button" value="AC" className="span2" onClick={e => setText("")}/>
                <input type="button" value="DEL" onClick={e => setText(text.slice(0,-1))}/>
                <input type="button" value="/" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="1" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="2" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="3" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="*" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="4" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="5" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="6" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="+" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="7" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="8" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="9" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="-" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="." onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="0" onClick={(e)=> setText(text + e.target.value)}/>
                <input type="button" value="=" className="span2" onClick={e => setText(eval(text))}/>
            </div>
        </div>
        </>
        

    );
};

root.render(<AppLayout/>);  