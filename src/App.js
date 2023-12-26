import './App.css';
import Menu from './Composant/section1/Section1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './Composant/section1/Section2';
import Gallerie from './Composant/Gallerie/Gallerie';
import Chef from './Composant/Chefs/Chef';
import Contact from './Composant/Contact/Contact';


function App() {
  return (
    <div className="">
      <Menu />
      <Section2 />
      <Gallerie />
      <Chef />
      <Contact />
    </div>
  );
}

export default App;
