
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'; // Import the Roboto font
import About from './components/second-sec';
import About2 from './components/third-sec';
import MobileFriendlyNavbar from './components/Navbar';
import FullViewportSection from './components/first-sect'
import FullViewportSection2 from './components/fourth-sec'
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
