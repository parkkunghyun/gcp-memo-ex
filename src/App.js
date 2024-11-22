import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPage from './AddPage';
import MainPage from './MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/add' element={<AddPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
