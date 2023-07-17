import Navbar from './Navbar';
import Home from './Home';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />              
        <div className="content">                  
          <Routes>    
            <Route path='/' element={<Home/>} />                   
            <Route path='/contact' element={<Contact/>} />   
            <Route path='/about' element={<About/>} />                      
          </Routes>
          <Footer />         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
