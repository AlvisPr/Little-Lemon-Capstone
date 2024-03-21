import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import RoutesWithTransitions from './Components/RoutesWithTransitions';
import "./App.css";


function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <RoutesWithTransitions />
        <Footer />
    </Router >
    </div>
  );
}

export default App;


