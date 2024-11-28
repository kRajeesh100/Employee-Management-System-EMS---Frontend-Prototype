import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </Router>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
