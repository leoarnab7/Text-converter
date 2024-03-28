import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import { createBrowserRouter} from "react-router-dom";


function App() {
 



  const [mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled", "success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert("light mode has been enabled", "success");


    }
  }
  return (
   <>
  <Navbar title="TextUtils" home="Home" Link="About"  mode={mode}  about="About"  toggleMode={toggleMode}/>
<Alert alert={alert}/>

 <TextForm  showAlert={showAlert} mode={mode}  heading="Enter the text to analyze"  />
   
</>
);
}

export default App;
