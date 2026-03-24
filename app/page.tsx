"use client";

import React from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const CATEGORIES = [
  { name: 'Candles & Fragrance', id: 'candles', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop', count: '12 items' },
  { name: 'Wellness & Bath',     id: 'bath',    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop', count: '8 items' },
  { name: 'Home Decor',          id: 'home',    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop', count: '15 items' },
  { name: 'Stationery & Focus',  id: 'stationery', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', count: '6 items' },
];

const FEATURES = [
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3m15 0h2v-3.34a1.72 1.72 0 0 0-.48-1.22L18.76 10H14m1 1h5v4m-3 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-11 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/></svg>,
    label: 'Standard Fast', 
    sub: 'Orders arrive in 48h' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><rect width="18" height="12" x="3" y="8" rx="2"/><path d="M12 22V8"/><path d="M7 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/><path d="M12 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/></svg>,
    label: 'Gift Ready', 
    sub: 'Modern wrap included' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
    label: 'Peace Of Mind', 
    sub: 'Full 30-day policy' 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    label: 'Fully Secure', 
    sub: 'Encrypted Checkout' 
  },
];

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg-blob hero-bg-blob-1" style={{ background: 'radial-gradient(circle, #ff3b6a, transparent)', opacity: 0.1 }} />

        <div className="container">
          <div className="hero-content" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <p className="hero-eyebrow animate-fade-up" style={{ color: 'var(--accent)', fontWeight: 800 }}>LIVE IN THE MOMENT</p>
            <h1 className="hero-title animate-fade-up delay-1" style={{ fontSize: 'clamp(3.5rem, 11vw, 7.5rem)', letterSpacing: '-0.06em', marginBottom: '1.5rem' }}>
              DISCOVER<br />
              <span className="hero-title-highlight" style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>THE UNEXPECTED.</span>
            </h1>
            <p className="hero-sub animate-fade-up delay-2" style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: 500, margin: '0 auto 3rem', maxWidth: '600px' }}>
              Premium lifestyle essentials designed for those who appreciate the modern aesthetic. Pure utility, absolute style.
            </p>
            <div className="hero-actions animate-fade-up delay-3">
              <Link href="/products" className="btn btn-primary" style={{ padding: '1.35rem 4rem', fontSize: '1.2rem', fontWeight: 800, borderRadius: 'var(--r-md)', minWidth: '280px' }}>
                SHOP COLLECTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-eyebrow" style={{ fontWeight: 800 }}>FEATURED</p>
              <h2 className="section-title" style={{ fontSize: '3rem' }}>THE COLLECTION</h2>
            </div>
            <Link href="/products" className="btn btn-primary" style={{ borderRadius: 'var(--r-md)' }}>VIEW ALL</Link>
          </div>

          <div className="grid grid-4">
            {featuredProducts.map((product, i) => (
              <div key={product.id} className={`animate-fade-up delay-${(i % 4) + 1}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES STRIP ─── */}
      <div className="container" style={{ margin: '4rem auto' }}>
        <div className="features-strip" style={{ 
          background: 'var(--surface)', 
          padding: '2rem 1.5rem',
          borderRadius: 'var(--r-md)',
          boxShadow: 'none',
          border: '1px solid var(--border)'
        }}>
          {FEATURES.map((f, i) => (
            <div key={f.label} className="feature-item" style={{ border: 'none' }}>
              <div className="feature-icon-wrap" style={{ color: 'var(--accent)' }}>{f.icon}</div>
              <div style={{ marginLeft: '1.25rem' }}>
                <p className="feature-label" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{f.label}</p>
                <p className="feature-sub" style={{ fontSize: '0.85rem' }}>{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ─── PROMO BANNER ─── */}
      <div className="container">
        <div className="promo-banner" style={{ 
          background: 'black', 
          borderRadius: 'var(--r-md)', 
          padding: '4rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div className="promo-banner-text" style={{ maxWidth: '600px' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white', fontWeight: 900, lineHeight: 1.1 }}>READY TO ELEVATE YOUR SPACE?</h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>All orders ship in signature modern packaging today.</p>
          </div>
          <Link href="/products" className="btn btn-primary" style={{ height: '64px', padding: '0 3.5rem', fontSize: '1.1rem', borderRadius: 'var(--r-md)', fontWeight: 800 }}>SHOP NOW</Link>
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <section id="categories" className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <p className="section-eyebrow" style={{ fontWeight: 800 }}>EXPLORE</p>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>THE CATALOG</h2>
          </div>

          <div className="grid grid-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                href={`/products?category=${cat.id}`}
                key={cat.id}
                className="category-card"
                style={{ borderRadius: 'var(--r-md)', aspectRatio: '1' }}
              >
                <img src={cat.img} alt={cat.name} className="category-img" />
                <div className="category-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                  <div style={{ padding: '2rem' }}>
                    <h3 className="category-title" style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.25rem' }}>{cat.name.toUpperCase()}</h3>
                    <p className="category-link-label" style={{ fontWeight: 700, opacity: 0.7, fontSize: '0.85rem' }}>{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="newsletter-section" style={{ 
          background: 'var(--surface)', 
          borderRadius: 'var(--r-md)', 
          color: 'var(--text)',
          padding: '5rem 2rem',
          textAlign: 'center',
          border: '1px solid var(--border)'
        }}>
            <p className="section-eyebrow" style={{ color: 'var(--accent)', fontWeight: 800, justifyContent: 'center' }}>STAY CONNECTED</p>
            <h2 className="section-title" style={{ fontSize: '2.5rem', color: 'var(--text)', marginBottom: '1rem' }}>Join the community</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 3rem', fontWeight: 500 }}>
              Exclusive drops, early previews, and first access. No fluff, just modern essentials.
            </p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
                required
                style={{ height: '60px', background: 'white', border: '1px solid var(--border)', color: 'black', fontWeight: 600, flexGrow: 1, padding: '0 1.5rem', borderRadius: 'var(--r-md)' }}
              />
              <button type="submit" className="btn btn-primary" style={{ height: '60px', padding: '0 2rem', borderRadius: 'var(--r-md)' }}>Subscribe</button>
            </form>
        </div>
      </div>
    </>
  );
}
