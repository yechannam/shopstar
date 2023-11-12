import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./Components/Main";
import './css/App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<></>} />
        <Route path="/QnA" element={<></>} />
        <Route path="/basket" element={<></>} />
        <Route path="/login" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
