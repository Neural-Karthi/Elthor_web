import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import SwappingData from './views/SwappingData';
import './App.css'
import Footer from './Components//Footer.jsx'
import BikeModel from './views/BikeModel.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Home /><Footer /></>} />
        <Route path='/Swapping-station' element={<><SwappingData/><Footer /></>} />
        <Route path="/Bikemodel/:model" element={<><BikeModel /><Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App
