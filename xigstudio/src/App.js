import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import InroSection from './Components/IntroSection/IntroSection';
import ChoosUs from './Components/Chose/ChoosUs';

function App() {
  return (
    <div className='wrapper'>
      <div className='firstPage'>
      <Hero/>
      </div>
      <div className='introSection'>
        <InroSection/>
      </div>
      <div className='choosUsSection'>
        <ChoosUs/>
      </div>
    </div>
  );
}

export default App;
