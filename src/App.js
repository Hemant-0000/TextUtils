/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [btnMode, setBtnMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#2b2e32'
      document.body.style.color = 'white'
      setBtnMode('secondary')
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#2b2e32'
      setBtnMode('primary')
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Home"
    }
  }

  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" home="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      
      {/* <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" btnMode={btnMode} />} />
      </Routes>
        </div> */}

      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" btnMode={btnMode} />
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;