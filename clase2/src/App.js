import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './styles.css';


const items = [
  { id: 1, name: 'Cortado', description: 'Esto es un Cortado, nivel de cafe medio', category: 'hot' },
  { id: 2, name: 'Espresso', description: 'Esto es un Espresso, nivel de cafe alto', category: 'hot' },
  { id: 3, name: 'Latte', description: 'Esto es un Latte, nivel de cafe bajo', category: 'hot' },
  { id: 4, name: 'Cappuccino', description: 'Esto es un Cappuccino, nivel de cafe medio', category: 'hot'},
  { id: 5, name: 'Iced Americano', description: 'Esto es un Iced Americano, nivel de cafe alto', category: 'cold'},
  { id: 6, name: 'Iced Vanilla Latte', description: 'Esto es un Iced Vanilla Latte, nivel de cafe bajo', category: 'cold'},
  { id: 7, name: 'Oreo Frappe', description: 'Esto es un Frappuchino de oreo, nivel de cafe medio', category: 'cold'},
];


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer items={items} />} />
          <Route path="/category/hot" element={<ItemListContainer items={items.filter(item => item.category === 'hot')} />} />
          <Route path="/category/cold" element={<ItemListContainer items={items.filter(item => item.category === 'cold')} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer items={items} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
