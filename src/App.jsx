import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Rocket, Target, LayoutDashboard, LogIn } from 'lucide-react';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <Rocket size={28} color="#2563EB" />
        Aakash Academics
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/login" className="btn btn-secondary">
          <LogIn size={18} /> Login
        </Link>
        <Link to="/dashboard" className="btn btn-primary">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
