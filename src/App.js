import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Reserve from './Components/Reserve';
import Summary from './Components/Summary';
import Footer from './Components/Footer';
import Completed from './Components/Completed';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/reservation_completed" element={<Completed/>}></Route>
          <Route path="/summary" element={<Summary />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

