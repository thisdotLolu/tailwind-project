import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
// import { AuthContextProvider } from './context/AuthContext';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
      
    </>
  );
}

export default App;
