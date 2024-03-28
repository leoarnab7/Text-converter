import React, { useState } from "react";

export default function TextForm(props) {


  const [text, setText] = useState("enter 143 ");

  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase"," success")
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase"," success")
  };
  const handleOnChange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  };

  return (
    <>
    
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>

      <div className="mb-3">
       
        <textarea
          className="form-control"value={text} id="myBox"
          rows="10"
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-2" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
    </div>

    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>your text summary</h2>
      <p>{text.split(" ").length}words and {text.length}chracters</p>
      <p>{0.008* text.split(" ").length}minutes to read</p>
    </div>

    </>
  );
}
