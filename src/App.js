
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
 <>
 <BrowserRouter>
 <MyNavbar/>
 <MyCarousel/>
 </BrowserRouter>
 </>
  );
}

export default App;
