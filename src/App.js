import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Resume from './pages/Resume'
import Cover from './pages/Cover'


function App() {

  return (
    <div className="App">
      <header>
        <div className="App-header">
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Resume/>}></Route>
            <Route path="/coverletter" element={<Cover/>}></Route>
          </Routes>
        </Router>
      </header>
      {/* <footer className="App-footer">© 2024 Nicholas Herman</footer> */}
    </div>
  );
}

export default App;
