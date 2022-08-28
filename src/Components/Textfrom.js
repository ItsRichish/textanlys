import React,{useState} from 'react'

export default function Textfrom(props) {
    const [text, settext] = useState('Enter the text');
    const hanldeOnChange= (event)=>{
        settext(event.target.value);
    }
    const handleUpCilck = ()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLower = ()=>{
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text was Copied", "primary");
    }
    const handleExtraSpace = ()=>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Extra spaces was removed", "warning");
    }
    const handleClear = ()=>{
        let newText = '';
        settext(newText);
        props.showAlert("Text was Removed", "danger");
    }

    return (
        <>
        <div className="container mt-3" style={{backgroundColor: props.mode ==='dark'?'#23262e':'white'}}>
            <h1 className={`text-${props.mode === 'light'?'dark':'light'}  mb-4`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'}`} value={text} onChange={hanldeOnChange} id="myBox" style={{backgroundColor: props.mode==='dark'?'#303238':'white'}} rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleUpCilck}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary m-2" onClick={handleLower}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-success m-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-warning m-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button disabled={text.length === 0} className="btn btn-danger m-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container" style={{backgroundColor: props.mode ==='dark'?'#23262e':'white'}}>
            <h1 style={{color: props.mode==='dark'?'white':'#303238'}}>Your Text Summary</h1>
            <p style={{color: props.mode==='dark'?'white':'#303238'}}> {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters </p>
            <p style={{color: props.mode==='dark'?'white':'#303238'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minutes to read</p>
            <h3 style={{color: props.mode==='dark'?'white':'#303238'}}>Preview</h3>
            <p style={{color: props.mode==='dark'?'white':'#303238'}} className='pb-3'>
                {text.length>0?text:'Nothing to Preview'}
            </p>
        </div>
        </>
    )
}
