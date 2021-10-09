import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'

import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <Container >
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
