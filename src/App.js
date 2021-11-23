import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Privacy from "./Routes/Privacy";
import Contact from "./Routes/Contact";
import "bootstrap/dist/css/bootstrap.css";
import "tayeh-ui/dist/index.min.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
