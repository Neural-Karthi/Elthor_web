import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import SwappingData from './views/SwappingData';
import './App.css'
import Footer from './Components//Footer.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Home /><Footer /></>} />
        <Route path='/Swapping-station' element={<><SwappingData/><Footer /></>} />
      </Routes>
    </Router>
  )
}

export default App
