import React from 'react';
import { BookOpen, Calendar, Clock, Trophy, LineChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '85px' }}>
      
      {/* Sidebar */}
      <aside className="glass-panel" style={{ width: '280px', borderRadius: '0', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-blue), #60A5FA)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
            CS
          </div>
          <h3 style={{ fontSize: '1.2rem', fontFamily: 'Syne' }}>Chaitanya Sethi</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Class 12th | JEE Target</p>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'flex-start', padding: '14px 20px' }}>
           <LineChart size={18} /> Overview
        </button>
        <button className="btn btn-secondary" style={{ border: 'none', width: '100%', justifyContent: 'flex-start', padding: '14px 20px', textAlign: 'left' }}>
           <BookOpen size={18} /> My Test Series
        </button>
        <button className="btn btn-secondary" style={{ border: 'none', width: '100%', justifyContent: 'flex-start', padding: '14px 20px', textAlign: 'left' }}>
           <Trophy size={18} /> Leaderboard
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 5%' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Welcome back, <span className="gradient-text">Chaitanya!</span></h1>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {[
            { label: 'Overall Percentile', value: '98.5%', change: '+1.2%', color: 'var(--success-teal)' },
            { label: 'Tests Attempted', value: '42', change: '+3 this week', color: 'var(--primary-blue)' },
            { label: 'Current Streak', value: '14 Days', change: 'Keep it going!', color: 'var(--accent-orange)' }
          ].map((stat, i) => (
            <div key={i} className="anti-gravity-container">
              <div className="glass-panel anti-gravity-card" style={{ padding: '25px' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>{stat.label}</p>
                <h2 style={{ fontSize: '2.2rem', fontFamily: 'Syne', marginBottom: '5px' }}>{stat.value}</h2>
                <p style={{ color: stat.color, fontSize: '0.9rem', fontWeight: 'bold' }}>{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Tests Section */}
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontFamily: 'Syne' }}>Upcoming Live Tests</h2>
        
        <div className="anti-gravity-container">
          <div className="glass-panel anti-gravity-card" style={{ padding: '0' }}>
            {/* Test Header */}
            <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>ALL INDIA MOCK TEST (AITS) - 05</h3>
                <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> Oct 24, 2026</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> 10:00 AM - 1:00 PM</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ padding: '10px 24px' }}>Register Now</button>
            </div>
            
            <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>PART TEST - PHYSICS (MECHANICS)</h3>
                <div style={{ display: 'flex', gap: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> Oct 28, 2026</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> 6:00 PM - 7:00 PM</span>
                </div>
              </div>
              <button className="btn btn-secondary" style={{ padding: '10px 24px' }}>Registered</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
