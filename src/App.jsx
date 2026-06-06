import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './index.css'
import { Routes, Route } from "react-router";

function App() {
  
  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
  )
}

export default App
