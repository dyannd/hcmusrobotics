import './styles/index.scss';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Courses from './Courses';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
