import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rankings from './components/Rankings/Rankings';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path='/' component={Homepage} />
                <Route exact path='/rankings' component={Rankings} />
            </div>``
        </Router>

    );
}

export default App;
