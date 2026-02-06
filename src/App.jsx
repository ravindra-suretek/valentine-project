import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Love from "./Pages/Love"
import ReasonsLove from "./Pages/ReasonsLove"
import Hug from "./Pages/Hug"
import RotatingValentine from "./Pages/RotatingValentine"
import FloatingHearts from "./Components/FloatingHearts"
import './App.css'

function App() {
 

  return (
    <>
    <FloatingHearts />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/reasonsLove" element={<ReasonsLove />} />
        <Route path="/hug" element={<Hug />} />
         <Route path="/rotatingValentine" element={<RotatingValentine />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
