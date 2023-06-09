
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'; // Import the Roboto font
import About from './components/second-sec';
import About2 from './components/third-sec';
import MobileFriendlyNavbar from './components/Navbar';
import Firstsec from './components/first-sect'
import Plans from './components/fourth-sec'
import Beginnings from './components/fifth-sec';
import Stocktick from './components/stock-tick';



function App() {
  return (
    <div className="App">
      
    < MobileFriendlyNavbar/>
    <Firstsec/>
    <Stocktick/>
    <About/>
    <About2/>
    <Plans/>
    <Beginnings/>
    
    
    

    </div>
  );
}

export default App;
