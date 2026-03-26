"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const CATEGORIES = [
  { name: 'Candles & Fragrance', id: 'candles', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=700&auto=format&fit=crop', count: '12 items', emoji: '🕯️' },
  { name: 'Wellness & Bath',     id: 'bath',    img: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=700&auto=format&fit=crop', count: '8 items',  emoji: '🛁' },
  { name: 'Home Decor',          id: 'home',    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=700&auto=format&fit=crop', count: '15 items', emoji: '🏡' },
  { name: 'Stationery & Focus',  id: 'stationery', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=700&auto=format&fit=crop', count: '6 items', emoji: '📓' },
];

const BRAND_QUALITIES = [
  {
    title: "Hand-Crafted Quality",
    desc: "Meticulously vetted craftsmanship for products that last a lifetime.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Sustainable Ethics",
    desc: "Eco-conscious materials and ethical manufacturing in every detail.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "Premium Packaging",
    desc: "Every order arrives in signature gift-ready packaging, beautifully wrapped.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Orders shipped within 24 hours with real-time tracking across Pakistan.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3m15 0h2v-3.34a2 2 0 0 0-.48-1.22L18.76 10H14v7m1 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-11 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
      </svg>
    ),
  },
];

const HERO_IMAGES = [
  '/images/hero/hero1.png',
  '/images/hero/hero2.png',
  '/images/hero/hero3.png',
];

const STATS = [
  { num: '10k+', label: 'Happy Customers' },
  { num: '4.9★', label: 'Average Rating' },
  { num: '48h',  label: 'Delivery Time' },
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
    <div>
      {/* ══════════════════════════════════════════
          HERO — editorial split layout
      ══════════════════════════════════════════ */}
      <section className="home-hero">
        {/* Background crossfade */}
        {HERO_IMAGES.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`home-hero-img ${idx === currentHeroIdx ? 'home-hero-img--active' : ''}`}
          />
        ))}
        <div className="home-hero-overlay" />

        {/* Top badge */}
        <div className="home-hero-badge">
          <span className="home-hero-badge-dot" />
          New Collection · Spring 2025
        </div>

        {/* Dot indicators */}
        <div className="home-hero-dots">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={`home-hero-dot ${idx === currentHeroIdx ? 'home-hero-dot--active' : ''}`}
              onClick={() => setCurrentHeroIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container home-hero-inner">
          <div className="home-hero-left">
            <span className="home-hero-eyebrow">Est. 2024 · GiftAura Exclusive</span>
            <h1 className="home-hero-title">
              Discover the<br />
              <em className="home-hero-italic">Art of Giving.</em>
            </h1>
            <p className="home-hero-sub">
              Curated premium essentials for those who appreciate the modern aesthetic. Pure utility, absolute style.
            </p>
            <div className="home-hero-cta">
              <Link href="/products" className="home-hero-btn home-hero-btn--primary">
                Shop Collection
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#categories" className="home-hero-btn home-hero-btn--ghost">
                Browse Catalog
              </Link>
            </div>
          </div>

          {/* Stats column */}
          <div className="home-hero-stats-col">
            {STATS.map((s) => (
              <div key={s.label} className="home-hero-stat-card">
                <span className="home-hero-stat-num">{s.num}</span>
                <span className="home-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="home-hero-scroll">
          <span>Scroll</span>
          <div className="home-hero-scroll-line" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POPULAR PRODUCTS
      ══════════════════════════════════════════ */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="home-section-head">
            <div>
              <p className="section-eyebrow">TRENDING NOW</p>
              <h2 className="section-title">Popular Products</h2>
            </div>
            <Link href="/products" className="btn btn-ghost home-viewall-btn">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="home-products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CATEGORIES  (moved above Why Us)
      ══════════════════════════════════════════ */}
      <section id="categories" className="home-section home-section--tinted">
        <div className="container">
          <div className="home-section-head home-section-head--center">
            <div className="text-center">
              <p className="section-eyebrow" style={{ justifyContent: 'center' }}>SHOP BY CATEGORY</p>
              <h2 className="section-title">The Catalog</h2>
              <p className="section-sub" style={{ margin: '0.75rem auto 0' }}>
                Find the perfect gift from our premium collections.
              </p>
            </div>
          </div>

          <div className="home-cats-grid">
            {CATEGORIES.map((cat) => (
              <Link
                href={`/products?category=${cat.id}`}
                key={cat.id}
                className="home-cat-card"
              >
                <img src={cat.img} alt={cat.name} className="home-cat-img" />
                <div className="home-cat-overlay" />
                <div className="home-cat-body">
                  <span className="home-cat-emoji">{cat.emoji}</span>
                  <h3 className="home-cat-name">{cat.name}</h3>
                  <span className="home-cat-count">{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="home-section home-section--dark">
        <div className="container">
          <div className="home-section-head home-section-head--center">
            <div className="text-center">
              <p className="section-eyebrow" style={{ justifyContent: 'center', color: 'var(--pink)' }}>THE GIFTAURA PROMISE</p>
              <h2 className="section-title" style={{ color: 'white' }}>Why Choose Us?</h2>
              <p className="section-sub" style={{ margin: '0.75rem auto 0', color: 'rgba(255,255,255,0.55)' }}>
                We don't just sell gifts — we curate experiences.
              </p>
            </div>
          </div>

          <div className="home-quality-grid">
            {BRAND_QUALITIES.map((q, idx) => (
              <div key={idx} className="home-quality-card">
                <div className="home-quality-icon">{q.icon}</div>
                <h4 className="home-quality-title">{q.title}</h4>
                <p className="home-quality-desc">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="home-trust-bar">
            <span className="home-trust-item">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Trusted by 10,000+ customers
            </span>
            <span className="home-trust-divider" />
            <span className="home-trust-item">🎁 Gift-ready packaging always included</span>
            <span className="home-trust-divider" />
            <span className="home-trust-item">🔁 30-day hassle-free returns</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════ */}
      <section className="home-section home-section--light">
        <div className="container">
          <div className="home-newsletter">
            <div className="home-newsletter-icon">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <p className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>STAY IN THE LOOP</p>
            <h2 className="home-newsletter-title">Join the community</h2>
            <p className="home-newsletter-sub">
              Early access to exclusive drops, insider updates &amp; curated recommendations. No spam.
            </p>
            <form className="home-newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="home-newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary home-newsletter-btn">Subscribe</button>
            </form>
            <p className="home-newsletter-disclaimer">By subscribing you agree to our privacy policy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
