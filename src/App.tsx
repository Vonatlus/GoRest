import './App.css';
import Users from './components/Users';
import Edit from './components/Edit';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="users" element={<Users />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
