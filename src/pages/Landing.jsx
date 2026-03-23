import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Trophy, PlayCircle, Zap } from 'lucide-react';

const Landing = () => {
  return (
    <div className="page-container" style={{ padding: '0 5%', paddingTop: '150px' }}>
      
      {/* Hero Section */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse' }}>
        <div style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(37, 99, 235, 0.1)',
            color: '#60A5FA',
            borderRadius: '100px',
            fontWeight: '700',
            marginBottom: '20px',
            border: '1px solid rgba(37, 99, 235, 0.3)'
          }}>
            <Zap size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            V3.0 Platform is Live!
          </div>
          
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Live Tests. <br/>
            Real <span className="gradient-text">Ranks.</span> <br/>
            Real <span className="gradient-text-orange heading-baloo">Results.</span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}>
            Experience exam preparation that feels like a live sport. Compete with thousands, get instant analytics, and secure your seat in IIT/AIIMS.
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/login" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Start for Free <PlayCircle size={20} />
            </Link>
            <Link to="/dashboard" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              View Test Series
            </Link>
          </div>
        </div>

        {/* Floating Hero Visual */}
        <div className="anti-gravity-container" style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel anti-gravity-card floating" style={{ 
            width: '100%', 
            maxWidth: '500px', 
            padding: '40px', 
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(37, 99, 235, 0.1), rgba(10, 10, 11, 0))',
            border: '1px solid rgba(37, 99, 235, 0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Live Physics Test</h3>
                <p style={{ color: 'var(--text-secondary)' }}>JEE Mains Pattern</p>
              </div>
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger-red)', padding: '6px 16px', borderRadius: '100px', fontWeight: 'bold' }}>
                LIVE NOW
              </div>
            </div>

            <div style={{ marginBottom: '30px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '16px' }}>
               <h4 style={{ marginBottom: '15px' }}>Q4. A particle moves in a circular path of radius R...</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[ 'A. Velocity is constant', 'B. Acceleration is constant', 'C. Magnitude of velocity is constant', 'D. None of the above' ].map((opt, i) => (
                    <div key={i} style={{ padding: '12px 20px', border: '1px solid var(--glass-border)', borderRadius: '8px', opacity: 0.8 }}>
                      {opt}
                    </div>
                  ))}
               </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  CS
                </div>
                <div>
                   <p style={{ fontWeight: 'bold' }}>Chaitanya Sethi</p>
                   <p style={{ color: 'var(--success-teal)', fontSize: '0.9rem' }}>Rank #1</p>
                </div>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Syne' }}>74/100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ margin: '100px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>The Anti-Gravity <span className="gradient-text">Advantage</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Built for champions to conquer their fears.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { title: 'Live Test Sync', desc: 'Real-time synchronization for thousands of students with zero lag.', icon: <Target color="#2563EB" size={32} /> },
            { title: 'Global Leaderboards', desc: 'See where you stand instantly against peers nationwide.', icon: <Trophy color="#F97316" size={32} /> },
            { title: 'AI Analytics', desc: 'Weak topic identification to focus your preparation precisely.', icon: <Zap color="#14B8A6" size={32} /> }
          ].map((feature, idx) => (
            <div key={idx} className="anti-gravity-container">
              <div className="glass-panel anti-gravity-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', width: 'max-content' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Landing;
