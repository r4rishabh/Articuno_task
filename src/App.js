import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Login from "./component/Login";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
          <Route path="/login" exact element={<Login />} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
