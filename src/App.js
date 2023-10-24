import './App.css';
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import NoteState from './context/notes/NoteState';
// import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Service from './components/Service';

function App() {
  const ref = useRef(null)
  return (
    <>
    <NoteState>
    {/* // this is React Route Dom */}
      <Router>
        {/* // this is Navbar */}
        <Navbar/>
        <div className="container">
        <LoadingBar color='#f11946' ref={ref} />
          {/* <Alert message="This is Alert Message"/> */}
          {/* //Home Section */}
        
          <Routes>
            <Route exact path='/' element={<Home/>} />
          </Routes>

          {/* //About Section */}
          <Routes>
            <Route exact path='/about' element={<About/>} />
          </Routes>

          {/* //Blog Section */}
          <Routes>
            <Route exact path='/blog' element={<> <Blog/> </>}/>
          </Routes>
          
          {/* //Login Section */}
          <Routes>
            <Route exact path='/login' element={<> <Login/> </>}/>
          </Routes>
          
          {/* //SignUp Section */}
          <Routes>
            <Route exact path='/signup' element={<> <Signup/> </>}/>
          </Routes>

          <Routes>
            <Route exact path='/profile' element={<> <Profile/> </>}/>
          </Routes>

          <Routes>
            <Route exact path='/service' element={<> <Service/> </>}/>
          </Routes>

        </div>
      </Router>    
    </NoteState>
    </>
  );
}

export default App;
