import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drinks from "./pages/Drinks";
import NavBar from "./pages/NavBar";
import './styles.css';
import ColdDrinks from "./pages/ColdDrinks";
import HotDrinks from "./pages/HotDrinks";


function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Drinks />} />
            <Route path="/ColdDrinks" element={<ColdDrinks />} />
            <Route path="/HotDrinks" element={<HotDrinks />} />
            <Route path="*" element={<h1> 404 Not Found</h1>} />
            
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;