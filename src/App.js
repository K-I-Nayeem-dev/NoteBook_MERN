import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Service from './components/Service';
import NoteState from './context/NoteState';

function App() {
  return (
    <>
    <NoteState>
    {/* // this is React Route Dom */}
      <Router>
        {/* // this is Navbar */}
        <Navbar/>
        <div className="container">
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
            <Route exact path='/blog' element={<> <Blog/></>}/>
          </Routes>
        </div>
        <div className="container">
          <Service/> 
        </div>
      </Router>    
    </NoteState>
    </>
  );
}

export default App;
