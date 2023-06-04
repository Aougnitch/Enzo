
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'; // Import the Roboto font
import About from './components/About';
import About2 from './components/About2';
import MobileFriendlyNavbar from './components/Navbar';
import FullViewportSection from './components/first-sect'
import FullViewportSection2 from './components/second-sect'
import Typed from 'react-typed'
import FloatingText from './components/floatingtext';


function App() {
  return (
    <div className="App">
      
    < MobileFriendlyNavbar/>
    <FullViewportSection/>
    <About/>
    <About2/>
    

    <FullViewportSection2/>
    

    </div>
  );
}

export default App;
