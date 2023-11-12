import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./Components/Main";
import './css/App.css'
import Search from "./Components/Search";
import QnA from "./Components/QnA";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/QnA" element={<QnA />} />
        <Route path="/basket" element={<></>} />
        <Route path="/login" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
