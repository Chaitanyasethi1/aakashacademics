import React from 'react';
import { LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '80px' }}>
      <div className="anti-gravity-container" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="glass-panel anti-gravity-card" style={{ padding: '40px', textAlign: 'center' }}>
          
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome <span className="gradient-text">Back!</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>Enter your details to access your dashboard.</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Email or Phone Number</label>
              <input 
                type="text" 
                placeholder="chaitanya@example.com" 
                style={{ 
                  width: '100%', 
                  padding: '12px 20px', 
                  borderRadius: '12px', 
                  border: '1px solid var(--glass-border)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'white',
                  fontFamily: 'DM Sans',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }} 
              />
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                style={{ 
                  width: '100%', 
                  padding: '12px 20px', 
                  borderRadius: '12px', 
                  border: '1px solid var(--glass-border)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'white',
                  fontFamily: 'DM Sans',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }} 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', padding: '14px' }}>
              <LogIn size={20} /> Login Now
            </button>
          </form>

          <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
            Don't have an account? <Link to="/" style={{ color: 'var(--primary-blue)', fontWeight: 'bold' }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
