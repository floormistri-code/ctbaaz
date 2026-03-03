'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const sports = [
    { emoji: '⚽', name: 'Football', tag: 'Team' },
    { emoji: '🏀', name: 'Basketball', tag: 'Team' },
    { emoji: '🏐', name: 'Volleyball', tag: 'Team' },
    { emoji: '🏏', name: 'Cricket', tag: 'Team' },
    { emoji: '🏸', name: 'Badminton', tag: 'Individual' },
    { emoji: '🏓', name: 'Table Tennis', tag: 'Individual' },
    { emoji: '🤸', name: 'Kho-Kho', tag: 'Indigenous' },
    { emoji: '🤼', name: 'Kabaddi', tag: 'Indigenous' },
    { emoji: '🧘', name: 'Yoga', tag: 'Fitness' },
    { emoji: '🏃', name: 'Athletics', tag: 'Track' },
  ]

  const features = [
    { icon: '📅', title: 'Structured Training', desc: 'Daily periodized workouts built by certified coaches. Week-by-week progressions tailored for your event — 800m, 5K, or marathon.' },
    { icon: '📊', title: 'Performance Analytics', desc: 'Track pace, splits, heart rate and personal records. Visual dashboards for athletes, management reports for schools.' },
    { icon: '🎥', title: 'Video Drill Library', desc: 'Hundreds of sport-specific drills with video demonstrations. Filter by sport, difficulty, age group or equipment.' },
    { icon: '📝', title: 'Lesson Planning', desc: 'PE teachers build complete lesson plans — warmup, main activity, cooldown — with built-in drill picker and equipment allocator.' },
    { icon: '✅', title: 'Attendance System', desc: 'One-tap attendance for every class. Guardians get real-time updates. Management sees trends across all classes.' },
    { icon: '💬', title: 'Real-Time Coaching', desc: 'Live feedback during sessions, in-app messaging, and scheduled video calls between coaches and athletes.' },
    { icon: '📦', title: 'Equipment Management', desc: 'Track every ball, net and cone. Allocate equipment to lessons, monitor condition, get low-stock alerts.' },
    { icon: '👨‍👩‍👧', title: 'Guardian Portal', desc: 'Parents see attendance, workout completion, progress reports and communicate directly with coaches.' },
    { icon: '📵', title: 'Offline Mode', desc: 'Mobile app works without internet. Log workouts offline — everything syncs when connectivity returns.' },
  ]

  const plans = [
    { emoji: '🏃', role: 'Athlete', desc: 'Serious runners & multi-sport athletes', price: '₹499', cycle: '/month', features: ['Personalized training program', 'Workout logging & analytics', 'Drill video library', 'Coach messaging', 'Progress reports'], featured: false },
    { emoji: '🎽', role: 'Coach / Trainer', desc: 'Build programs & earn from athletes', price: '₹999', cycle: '/month · up to 30 athletes', features: ['Unlimited program builder', 'Live session tools', 'Athlete analytics', 'Video upload & sharing', 'Revenue from subscriptions'], featured: true },
    { emoji: '🏫', role: 'PE Teacher', desc: 'For school physical education teachers', price: '₹299', cycle: '/month per teacher', features: ['Lesson plan creator', 'Class attendance system', 'Drill library (all sports)', 'Equipment allocation', 'Activity logs & reports'], featured: false },
    { emoji: '🏢', role: 'School Management', desc: 'Institutions & academies', price: '₹4,999', cycle: '/month · unlimited teachers', features: ['All PE teacher features', 'Multi-class dashboard', 'Teacher performance reports', 'Curriculum compliance', 'Org-wide equipment inventory'], featured: false },
    { emoji: '👨‍👩‍👧', role: 'Guardian / Parent', desc: 'Stay connected with your child', price: '₹99', cycle: '/month · up to 3 children', features: ['Attendance notifications', 'Activity & progress view', 'Coach communication', 'Performance reports', 'Upcoming schedule'], featured: false },
  ]

  const tickerItems = ['FOOTBALL', 'BASKETBALL', 'VOLLEYBALL', 'CRICKET', 'BADMINTON', 'TABLE TENNIS', 'KHO-KHO', 'KABADDI', 'YOGA', '800M · 5K · MARATHON']

  return (
    <main style={{ background: '#f5f2eb' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 48px',
        background: 'rgba(245,242,235,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(10,10,15,0.1)',
      }}>
        <Image src="/logo.png" alt="CTBaaz" width={160} height={52} style={{ objectFit: 'contain' }} priority />
        <div style={{ fontSize: 12, color: '#6b6b7a', textAlign: 'center', lineHeight: 1.5 }}>
          <strong style={{ color: '#0a0a0f', display: 'block', fontSize: 11, letterSpacing: '0.5px' }}>
            Supported by Millers Group Track Foundation
          </strong>
          Empowering Champions Across India
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#sports" style={{ fontSize: 13, fontWeight: 500, color: '#0a0a0f', textDecoration: 'none', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Sports</a>
          <a href="#features" style={{ fontSize: 13, fontWeight: 500, color: '#0a0a0f', textDecoration: 'none', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Features</a>
          <a href="#pricing" style={{ fontSize: 13, fontWeight: 500, color: '#0a0a0f', textDecoration: 'none', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Pricing</a>
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: '#c8410a', color: '#fff', border: 'none',
              padding: '10px 22px', borderRadius: 6, cursor: 'pointer',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.5px',
            }}>
            Get Started →
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', gap: 60,
        padding: '120px 48px 80px',
        background: 'linear-gradient(135deg, #f5f2eb 55%, #1e2235 55%)',
      }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#e8b84b', padding: '6px 14px', borderRadius: 4,
            fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8410a', display: 'inline-block' }} />
            India&apos;s #1 Sports Performance Platform
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(64px, 8vw, 110px)',
            lineHeight: 0.9, letterSpacing: 2,
            color: '#0a0a0f', marginBottom: 24,
          }}>
            Train Like<br />
            <span style={{ color: '#c8410a' }}>A Baaz.</span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#3a3a48', maxWidth: 480, marginBottom: 36 }}>
            CTBaaz connects athletes, PE teachers, school management and guardians on one unified platform — built for Indian sports, from 800m to marathons, football to Kabaddi.
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 52 }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: '#c8410a', color: '#fff', border: 'none',
                padding: '13px 28px', borderRadius: 6, cursor: 'pointer',
                fontSize: 15, fontWeight: 600,
              }}>
              Start Training →
            </button>
            <a href="#pricing" style={{
              background: 'transparent', color: '#0a0a0f',
              border: '1.5px solid #0a0a0f',
              padding: '13px 28px', borderRadius: 6,
              fontSize: 15, fontWeight: 500, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center',
            }}>
              View Plans
            </a>
          </div>

          <div style={{ display: 'flex', gap: 40 }}>
            {[['10+', 'Sports Covered'], ['5', 'User Portals'], ['100%', 'India Built']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: '#c8410a', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 12, color: '#6b6b7a', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Role Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { icon: '🏃', title: 'Athlete', desc: 'Structured programs · 1-on-1 coaching · Analytics', price: '₹499', per: '/mo' },
            { icon: '🎽', title: 'Coach / Trainer', desc: 'Program builder · Live sessions · Revenue', price: '₹999', per: '/mo' },
            { icon: '🏫', title: 'PE Teacher', desc: 'Lesson planning · Attendance · Drill library', price: '₹299', per: '/mo' },
            { icon: '🏢', title: 'School / Institution', desc: 'Multi-class · Reports · Equipment mgmt', price: '₹4,999', per: '/mo' },
            { icon: '👨‍👩‍👧', title: 'Guardian / Parent', desc: 'Activity tracking · Attendance · Updates', price: '₹99', per: '/mo' },
          ].map((card) => (
            <div
              key={card.title}
              onClick={() => setModalOpen(true)}
              style={{
                background: 'rgba(245,242,235,0.06)',
                border: '1px solid rgba(245,242,235,0.14)',
                borderRadius: 10, padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 14,
                cursor: 'pointer', color: '#f5f2eb',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,242,235,0.12)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(245,242,235,0.06)')}
            >
              <div style={{ width: 44, height: 44, background: '#c8410a', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{card.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700 }}>{card.title}</div>
                <div style={{ fontSize: 11, color: 'rgba(245,242,235,0.5)', marginTop: 2 }}>{card.desc}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, color: '#e8b84b', letterSpacing: 1 }}>{card.price}</div>
                <div style={{ fontSize: 10, color: 'rgba(245,242,235,0.35)' }}>{card.per}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ background: '#c8410a', padding: '13px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="animate-ticker" style={{ display: 'inline-flex' }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '0 24px', fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: 2, color: 'rgba(255,255,255,0.85)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#e8b84b', display: 'inline-block' }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SPORTS ── */}
      <section id="sports" style={{ padding: '100px 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#c8410a', marginBottom: 10 }}>Sports Coverage</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: 2, lineHeight: 0.95, marginBottom: 16 }}>Every Sport.<br />One Platform.</h2>
        <p style={{ fontSize: 16, color: '#6b6b7a', maxWidth: 520, lineHeight: 1.7, marginBottom: 52 }}>From Olympic track events to indigenous Indian games — CTBaaz covers it all with sport-specific drills, programs and analytics.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', border: '1px solid rgba(10,10,15,0.1)', borderRadius: 12, overflow: 'hidden', gap: 1, background: 'rgba(10,10,15,0.1)' }}>
          {sports.map((s) => (
            <div
              key={s.name}
              style={{ background: '#f5f2eb', padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0f'; (e.currentTarget.querySelector('.sport-name') as HTMLElement).style.color = '#f5f2eb'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f5f2eb'; (e.currentTarget.querySelector('.sport-name') as HTMLElement).style.color = '#0a0a0f'; }}
            >
              <span style={{ fontSize: 34, transition: 'transform 0.2s' }}>{s.emoji}</span>
              <span className="sport-name" style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, transition: 'color 0.2s' }}>{s.name}</span>
              <span style={{ fontSize: 10, color: '#6b6b7a', letterSpacing: 1, textTransform: 'uppercase', background: 'rgba(10,10,15,0.06)', padding: '2px 8px', borderRadius: 20 }}>{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '100px 48px', background: '#1e2235' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#e8b84b', marginBottom: 10 }}>Platform Features</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: 2, lineHeight: 0.95, color: '#f5f2eb', marginBottom: 16 }}>Built For<br />Every Role.</h2>
        <p style={{ fontSize: 16, color: 'rgba(245,242,235,0.45)', maxWidth: 520, lineHeight: 1.7, marginBottom: 52 }}>Each user type gets a purpose-built experience — no bloat, no confusion.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,242,235,0.07)', borderRadius: 4, padding: '36px 28px', transition: 'background 0.2s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
            >
              <div style={{ width: 50, height: 50, background: '#c8410a', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 18 }}>{f.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: '#f5f2eb', marginBottom: 10 }}>{f.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(245,242,235,0.5)' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '100px 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#c8410a', marginBottom: 10 }}>Transparent Pricing</div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: 2, lineHeight: 0.95, marginBottom: 16 }}>Pay For What<br />You Need.</h2>
        <p style={{ fontSize: 16, color: '#6b6b7a', maxWidth: 520, lineHeight: 1.7, marginBottom: 52 }}>Every role is separately subscribed. Schools can bundle teachers and students at institutional rates.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {plans.map((p) => (
            <div
              key={p.role}
              style={{
                background: p.featured ? '#0a0a0f' : '#fff',
                border: p.featured ? '1.5px solid #c8410a' : '1px solid rgba(10,10,15,0.1)',
                borderRadius: 12, padding: '26px 20px',
                position: 'relative', transition: 'all 0.2s', cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(10,10,15,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              onClick={() => setModalOpen(true)}
            >
              {p.featured && (
                <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: '#c8410a', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )}
              <div style={{ fontSize: 26, marginBottom: 10 }}>{p.emoji}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 800, color: p.featured ? '#f5f2eb' : '#0a0a0f', marginBottom: 4 }}>{p.role}</div>
              <div style={{ fontSize: 12, color: '#6b6b7a', marginBottom: 16, lineHeight: 1.5 }}>{p.desc}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#c8410a', letterSpacing: 1, lineHeight: 1 }}>{p.price}</div>
              <div style={{ fontSize: 11, color: '#6b6b7a', marginBottom: 18 }}>{p.cycle}</div>
              <ul style={{ listStyle: 'none', fontSize: 12, lineHeight: 1.6 }}>
                {p.features.map((feat) => (
                  <li key={feat} style={{ padding: '5px 0', borderTop: `1px solid ${p.featured ? 'rgba(245,242,235,0.08)' : 'rgba(10,10,15,0.08)'}`, display: 'flex', alignItems: 'flex-start', gap: 6, color: p.featured ? 'rgba(245,242,235,0.6)' : '#6b6b7a' }}>
                    <span style={{ color: '#c8410a', fontWeight: 700, flexShrink: 0 }}>✓</span>{feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── NGO BANNER ── */}
      <div style={{ background: '#e8b84b', padding: '60px 48px', display: 'flex', alignItems: 'center', gap: 60 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(10,10,15,0.55)', marginBottom: 8 }}>Our Foundation</div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: 2, color: '#0a0a0f', lineHeight: 1, marginBottom: 14 }}>Supported by Millers Group<br />Track Foundation</h3>
          <p style={{ fontSize: 15, color: 'rgba(10,10,15,0.65)', lineHeight: 1.7, maxWidth: 520 }}>
            CTBaaz is proudly supported by the Millers Group Track Foundation — an NGO dedicated to democratizing access to quality sports coaching across India. Our partnership ensures talented athletes in underserved communities receive the tools to compete at the highest level.
          </p>
        </div>
        <div style={{ flexShrink: 0, background: '#0a0a0f', borderRadius: 16, padding: '28px 40px', textAlign: 'center', color: '#e8b84b' }}>
          <div style={{ fontSize: 44, marginBottom: 8 }}>🏃</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 3, lineHeight: 1.3 }}>MILLERS GROUP<br />TRACK FOUNDATION</div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'rgba(232,184,75,0.5)', textTransform: 'uppercase', marginTop: 6 }}>NGO · Empowering India</div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0a0a0f', padding: '60px 48px 28px', color: '#f5f2eb' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <Image src="/logo.png" alt="CTBaaz" width={140} height={46} style={{ objectFit: 'contain', marginBottom: 14, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: 13, color: 'rgba(245,242,235,0.4)', lineHeight: 1.7, maxWidth: 260, marginBottom: 16 }}>
              India&apos;s unified sports performance platform for athletes, coaches, schools and families.
            </p>
            <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: '#e8b84b' }}>Supported by Millers Group Track Foundation</div>
          </div>
          {[
            { title: 'Platform', links: ['Athlete Portal', 'Coach Portal', 'PE Teacher Portal', 'School Dashboard', 'Guardian Portal'] },
            { title: 'Sports', links: ['Track & Field', 'Cricket & Football', 'Kho-Kho & Kabaddi', 'Badminton', 'Yoga & Fitness'] },
            { title: 'Company', links: ['About CTBaaz', 'Millers Foundation', 'Contact Us', 'Privacy Policy', 'Terms of Service'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(245,242,235,0.35)', marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 14, color: 'rgba(245,242,235,0.6)', textDecoration: 'none' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(245,242,235,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(245,242,235,0.28)' }}>
          <span>© 2024 CTBaaz. Supported by Millers Group Track Foundation.</span>
          <span>Built in India 🇮🇳 · Razorpay Payments · DPDP Compliant</span>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {modalOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,10,15,0.7)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={(e) => { if (e.target === e.currentTarget) { setModalOpen(false); setSubmitted(false) } }}
        >
          <div style={{ background: '#f5f2eb', borderRadius: 16, padding: '44px 40px', maxWidth: 440, width: '90%', position: 'relative' }}>
            <button onClick={() => { setModalOpen(false); setSubmitted(false) }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#6b6b7a' }}>✕</button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 2, marginBottom: 8 }}>You&apos;re In!</h2>
                <p style={{ color: '#6b6b7a', fontSize: 14 }}>Welcome to CTBaaz. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <>
                <Image src="/logo.png" alt="CTBaaz" width={120} height={40} style={{ objectFit: 'contain', marginBottom: 20 }} />
                <p style={{ fontSize: 13, color: '#6b6b7a', marginBottom: 24 }}>Supported by Millers Group Track Foundation</p>

                {[
                  { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email', type: 'email', placeholder: 'you@example.com' },
                  { label: 'Mobile', type: 'tel', placeholder: '+91 98765 43210' },
                ].map((field) => (
                  <div key={field.label} style={{ marginBottom: 14 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 6 }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1px solid rgba(10,10,15,0.12)', borderRadius: 8, fontSize: 14, background: '#fff', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                ))}

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 6 }}>I am a...</label>
                  <select style={{ width: '100%', padding: '11px 14px', border: '1px solid rgba(10,10,15,0.12)', borderRadius: 8, fontSize: 14, background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                    <option value="">Select your role</option>
                    <option>Athlete (₹499/mo)</option>
                    <option>Coach / Trainer (₹999/mo)</option>
                    <option>PE Teacher (₹299/mo)</option>
                    <option>School / Institution (₹4,999/mo)</option>
                    <option>Guardian / Parent (₹99/mo)</option>
                  </select>
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  style={{ width: '100%', padding: 14, background: '#c8410a', color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: "'Syne', sans-serif" }}>
                  Create My Account →
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </main>
  )
}