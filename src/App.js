import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
    <NoteState>
    {/* // this is React Route Dom */}
      <Router>
        {/* // this is Navbar */}
        <Navbar/>
        <div className="container">
          <Alert message="This is Alert Message"/>
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
        </div>
      </Router>    
    </NoteState>
    </>
  );
}

export default App;
