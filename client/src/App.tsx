import { useState } from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} caseSensitive={false} />
          <Route path="/home" element={<Home />} caseSensitive={false} />
          <Route path="*" caseSensitive={false} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
