import logo from './logo.svg';
import './App.css';
import Picture from './components/picture.component';
import Information from './components/information.component';
import About from './components/about.component';
import Interests from './components/interests.component';
import Footer from './components/footer.component';

function App() {
  return (
    <div className="App">
      <Picture />
      <Information />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
