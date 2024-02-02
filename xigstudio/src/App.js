import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import InroSection from './Components/IntroSection/IntroSection';
import ChoosUs from './Components/Chose/ChoosUs';
import AreaOfPractices from './Components/AreaOfPractices/AreaOfPractices';
import Clients from './Components/ClientsSection/Clients';
import Team from './Components/TeamSection/Team';
import Faq from './Components/Faq/Faq';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

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
      <div className='areaOfPractices'>
        <AreaOfPractices/>
      </div>
      <div className='clients'>
        <Clients/>
      </div>
      <div className='team'>
        <Team/>
      </div>
      <div className='faq'>
        <Faq/>
      </div>
      <div className='subscribe'>
        <Subscribe/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
