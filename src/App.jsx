import './styles/index.scss';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Courses />
    </div>
  );
}

export default App;
