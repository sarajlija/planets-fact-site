import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import Earth from "./pages/PlanetEarth/Earth.js"
import Venus from "./pages/PlanetVenus/Venus.js"
import Jupiter from "./pages/PlanetJupiter/Jupiter.js"
import Neptune from "./pages/PlanetNeptune/Neptune.js"
import Uranus from "./pages/PlanetUranus/Uranus.js"
import Saturn from "./pages/PlanetSaturn/Saturn"
import Mars from "./pages/PlanetMar/Mars"

function App() {
  return (
    <main>
      <Header />
      <hr className="text-light my-0 " />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </main>
  )
}

export default App
