import Users from './components/Users';
import Edit from './components/Edit';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Head from './components/Head';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
