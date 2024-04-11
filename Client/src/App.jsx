import Main from "./Page/Main"
import Guest from "./Components/Guest"
import Staff from "./Components/Staff"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Guest/>}/>
          <Route path="/staff" element={<Staff/>}/>
          <Route path="/home" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App
