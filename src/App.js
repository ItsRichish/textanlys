import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textfrom from './Components/Textfrom';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"


function App() {
  const [mode, setmode] = useState('light');
  const [swtchtext, setswtchtext] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  };

  const toggleMode=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#303238';
      setswtchtext('Disable Dark Mode');
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setswtchtext('Enable Dark Mode');
      showAlert( "Light Mode has been enabled", 'success')
    }
  };

  return (
    <Router>
    <>
    <Navbar toggleMode={toggleMode} mode={mode} text={swtchtext}/>
    <Alert alert={alert} />
    <Routes>
      {/* /user --> Component 1
          /user/home --> Compnent 2 */}
      <Route exact path='/about' element={<About mode={mode} />} />
      <Route exact path='/' element={<Textfrom heading='Enter Your Text' mode={mode} showAlert={showAlert} />}></Route>
    </Routes>
    </>
    </Router>
  );
}

export default App;
