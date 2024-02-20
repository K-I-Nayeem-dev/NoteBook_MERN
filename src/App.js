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
            {/* //About Section */}
              <Route exact path='/about' element={<About/>} />

            {/* //Blog Section */}
              <Route exact path='/blog' element={<> <Blog/> </>}/>
            
            {/* //Login Section */}
              <Route exact path='/login' element={<> <Login/> </>}/>
            
            {/* //SignUp Section */}
              <Route exact path='/signup' element={<> <Signup/> </>}/>
              <Route exact path='/profile' element={<> <Profile/> </>}/>
              <Route exact path='/service' element={<> <Service/> </>}/>

          </Routes>

        </div>
      </Router>    
    </NoteState>
    </>
  );
}

export default App;
