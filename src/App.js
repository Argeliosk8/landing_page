import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './Components/NavBar/NavBar';
import BodyContainer from './Components/BodyContainer/BodyContainer'; 
function App() {
  return (
    <div class='container-fluid p-0'>
      <NavBar />
      <BodyContainer />
    </div>
  );
}

export default App;
