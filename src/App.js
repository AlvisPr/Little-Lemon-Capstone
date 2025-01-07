import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import RoutesWithTransitions from './Components/RoutesWithTransitions';
import ScrollToTop from './Components/ScrollToTop';
import "./App.css";
import { FormDataProvider } from './Components/FormDataProvider';


function App() {
  return (

    <div className="App">
      <FormDataProvider>
        <Router>
          <Nav />
          <RoutesWithTransitions />
          <ScrollToTop />
          <Footer />
        </Router >
      </FormDataProvider>
    </div>
  );
}

export default App;
