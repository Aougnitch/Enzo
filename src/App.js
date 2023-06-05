
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'; // Import the Roboto font
import About from './components/second-sec';
import About2 from './components/third-sec';
import MobileFriendlyNavbar from './components/Navbar';
import FullViewportSection from './components/first-sect'
import FullViewportSection2 from './components/fourth-sec'
import FullViewportSection3 from './components/fifth-sec';


function App() {
  return (
    <div className="App">
      
    < MobileFriendlyNavbar/>
    <FullViewportSection/>
    <About/>
    <About2/>
    <FullViewportSection2/>
    <FullViewportSection3/>
    

    </div>
  );
}

export default App;
