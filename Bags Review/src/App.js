
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviews from './Components/Reviews/Reviews';
import DashBoard from './Components/DashBoard/DashBoard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Reviews' element={<Reviews/>}></Route>
        <Route path='/DashBoard' element={<DashBoard/>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
