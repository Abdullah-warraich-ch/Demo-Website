"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const CATEGORIES = [
  { name: 'Candles & Fragrance', id: 'candles', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop', count: '12 items' },
  { name: 'Wellness & Bath',     id: 'bath',    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop', count: '8 items' },
  { name: 'Home Decor',          id: 'home',    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop', count: '15 items' },
  { name: 'Stationery & Focus',  id: 'stationery', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', count: '6 items' },
];

const BRAND_QUALITIES = [
  {
    title: "Hand-Crafted Quality",
    desc: "Meticulously vetted craftsmanship for products that last a lifetime.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  },
  {
    title: "Sustainable Ethics",
    desc: "Prioritize eco-conscious materials and ethical manufacturing processes.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  },
  {
    title: "Modern Minimalist",
    desc: "Pure utility meets absolute style designed for contemporary living.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  }
];

const HERO_IMAGES = [
  '/images/hero/hero1.png',
  '/images/hero/hero2.png',
  '/images/hero/hero3.png',
];

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-wrapper">
      {/* ─── PREMIUM HERO V2 ─── */}
      <section className="hero-v2">
        <div className="hero-v2-bg">
          {HERO_IMAGES.map((img, idx) => (
            <img 
              key={img}
              src={img} 
              alt="" 
              className={`hero-v2-img ${idx === currentHeroIdx ? 'active' : ''}`}
              style={{ 
                opacity: idx === currentHeroIdx ? 0.6 : 0, 
                zIndex: idx === currentHeroIdx ? 2 : 1,
              }}
            />
          ))}
          <div className="hero-v2-overlay" />
        </div>

        <div className="hero-v2-content">
          <span className="hero-v2-eyebrow animate-fade-up">Est. 2024 • GiftAura Exclusive</span>
          <h1 className="hero-v2-title animate-fade-up delay-1">
            DISCOVER THE <br />
            ART OF GIVING.
          </h1>
          <p className="hero-v2-sub animate-fade-up delay-2">
            Curated premium essentials designed for those who appreciate the modern aesthetic. Pure utility, absolute style.
          </p>
          <div className="flex justify-center gap-4 animate-fade-up delay-3">
            <Link href="/products" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
              Shop Collection
            </Link>
            <Link href="/products" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', color: 'white', borderColor: 'white' }}>
              View Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POPULAR PRODUCTS ─── */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <p className="section-eyebrow">TRENDING NOW</p>
              <h2 className="section-title">Popular Products</h2>
            </div>
            <Link href="/products" className="btn btn-ghost" style={{ borderRadius: 'var(--r-md)' }}>VIEW ALL</Link>
          </div>

          <div className="grid grid-4">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND QUALITY / SELF ADVERTISEMENT ─── */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <div className="section-header text-center">
            <p className="section-eyebrow justify-center">THE GIFTAURA PROMISE</p>
            <h2 className="section-title">Why Choose Us?</h2>
          </div>
          
          <div className="quality-grid">
            {BRAND_QUALITIES.map((q, idx) => (
              <div key={idx} className="quality-card">
                <div className="quality-icon">{q.icon}</div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{q.title}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section id="categories" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">EXPLORE</p>
            <h2 className="section-title">The Catalog</h2>
          </div>

          <div className="grid grid-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                href={`/products?category=${cat.id}`}
                key={cat.id}
                className="category-card"
                style={{ borderRadius: 'var(--r-md)' }}
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
      <div className="container" style={{ paddingBottom: '9rem' }}>
        <div className="newsletter-section" style={{ 
          background: 'black', 
          borderRadius: 'var(--r-xl)', 
          color: 'white',
          padding: '6rem 2rem',
          textAlign: 'center',
        }}>
            <p className="section-eyebrow" style={{ color: 'var(--pink)', fontWeight: 800, justifyContent: 'center' }}>STAY CONNECTED</p>
            <h2 className="section-title" style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Join the community</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
              Exclusive drops, early previews, and first access. No fluff, just modern essentials.
            </p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()} style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input"
                required
                style={{ height: '64px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: 600, flexGrow: 1, padding: '0 2rem', borderRadius: 'var(--r-md)' }}
              />
              <button type="submit" className="btn btn-primary" style={{ height: '64px', padding: '0 2.5rem', borderRadius: 'var(--r-md)', minWidth: '150px' }}>Join</button>
            </form>
        </div>
      </div>
    </div>
  );
}
