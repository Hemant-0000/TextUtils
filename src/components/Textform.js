import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Was Clicked !" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLoClick = () => {
        // console.log("Lowercase Was Clicked !" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }

    const handleOnChange = (event) => {
        // console.log("On Changed !")
        setText(event.target.value);
    }

    const handleCopy = (event) => {
        // console.log("Copied !")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    }

    const handleExtraSpaces = (event) => {
        // console.log("Extra Spaces Removed !")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
    }

    const handleClearClick = (event) => {
        // console.log("Cleared !")
        setText('');
        props.showAlert("Cleared!","success")
    }
    const [text, setText] = useState('');
    // text = "new text" // Wrong way to change the state
    // setText("new text") // Correct way to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="buttons">
                <button className={`btn btn-${props.btnMode}`} onClick={handleUpClick} >Convert to Uppercase</button>
                <button className={`mx-3 btn btn-${props.btnMode}`}  onClick={handleLoClick} >Convert to Lowercase</button>
                <button className={`btn btn-${props.btnMode}`} onClick={handleCopy}>Copy</button>
                <button className={`mx-3 btn btn-${props.btnMode}`}  onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className={`btn btn-${props.btnMode}`} onClick={handleClearClick} >Clear</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p> {
                text===""?0:text.split(" ").length
                } words and {text.length} characters </p>
                <p> {
                text===""?0:0.008 * text.split(" ").length
                } minutes read </p>
                <h2>Preview</h2>
                <p> {text===''?"Enter something in the text box above to preview it here":text} </p>
            </div>
        </>
    )
}
