import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Homepage} />
      </div>
    </Router>

  );
}

export default App;
