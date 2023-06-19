import './App.css';
import NavBar from './Components/NavBar/NavBar';
import BodyContainer from './Components/BodyContainer/BodyContainer'; 
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div class='container-fluid p-0'>
      <NavBar />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
