import React,{useState} from 'react'

export default function About(props) {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    // const [btnTxt, setbtnTxt] = useState('Enable Dark Mode')


    const toggleStyle = ()=>{
        if(myStyle.color === 'white'){
            setmyStyle({
                color: "black",
                backgroundColor: 'white'
            });
            // setbtnTxt("Enable Dark Mode");
        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            // setbtnTxt("Disable Dark Mode")
        }
    }
    
    return (
        <div classNameName='container' style={myStyle}>
            <h1 classNameName='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                <div className="accordion-body" style={myStyle}>
                    <strong>This is Text Analyze app which have some functions here.</strong> This app can change your text to upper Case,changes all text to lower case, Copy the text you change, remove extra spaces etc.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                <div className="accordion-body">
                    <strong>This is my first React Based Project</strong> And I am gald to use this kind of Library of Java Script
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                
                <div className="accordion-body" style={myStyle}>
                    <strong>Here I used Bootstrap components also to make my website Responsive</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
                </div>
                </div>
            </div>
            </div>
            {/* <div classNameName="continer my-3">
                <button className="btn btn-primary my-5" onClick={toggleStyle}>{btnTxt}</button>
            </div> */}
        </div>
    )
    }
