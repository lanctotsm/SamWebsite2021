import logo from './logo.svg';
import './App.css';
import Nav from './components/navigation';
import Masthead from './components/MastHead';
import Portfolio from './components/portfolio';
import AboutUs from './components/aboutus';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Nav></Nav>
      <Masthead></Masthead>
      <Portfolio></Portfolio>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
      <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; Your Website 2021</small></div>
      </div>
    </div>

  );
}

export default App;
