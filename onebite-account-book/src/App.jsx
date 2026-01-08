import './App.css'

import EditTransaction from './pages/EditTransaction';
import Home from './pages/Home';
import NewTransaction from './pages/NewTransaction';

import { Routes, Route  } from "react-router-dom";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-transaction" element={<NewTransaction />} />
        <Route path="/edit-transaction/:id" element={<EditTransaction />} />
      </Routes>
    </>
  )
}

export default App
