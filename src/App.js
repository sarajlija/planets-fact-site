import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
