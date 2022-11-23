import './App.css';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { IndexPage } from './components';
import { DetailPage } from './components/detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/image/:id' element={<DetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
