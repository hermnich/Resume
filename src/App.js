import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Resume from './pages/Resume'


function App() {

  return (
    <div className="App">
      <header>
        <div className="App-header">
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Resume/>}></Route>
          </Routes>
        </Router>
      </header>
      {/* <footer className="App-footer">© 2024 Nicholas Herman</footer> */}
    </div>
  );
}

export default App;
