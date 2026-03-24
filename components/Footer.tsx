"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '8rem', background: 'white' }}>
      <div className="container">
        <div className="footer-grid" style={{ gap: '5rem' }}>
          {/* Brand */}
          <div style={{ maxWidth: '350px' }}>
            <div className="footer-logo" style={{ marginBottom: '2.5rem' }}>
              <span style={{ 
                fontWeight: 900, 
                fontSize: '2rem', 
                color: 'black', 
                letterSpacing: '-0.07em',
                textTransform: 'uppercase'
              }}>GiftAura</span>
            </div>
            <p className="footer-desc" style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, fontWeight: 500 }}>
              Pakistan's premier destination for modern lifestyle essentials. Curated with precision, delivered with style.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem' }}>
              {['INSTAGRAM', 'PINTEREST', 'X'].map(s => (
                <a key={s} href="#" style={{
                  fontSize: '0.75rem', fontWeight: 900, color: 'black',
                  letterSpacing: '0.1em', transition: 'all 0.2s', textDecoration: 'none',
                  opacity: 0.4
                }} 
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="footer-col">
            <h5 style={{ color: 'black', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem' }}>CATALOG</h5>
            <ul className="footer-links">
              <li><Link href="/products?category=candles" style={{ fontWeight: 600 }}>Fragrance</Link></li>
              <li><Link href="/products?category=bath" style={{ fontWeight: 600 }}>Wellness</Link></li>
              <li><Link href="/products?category=home" style={{ fontWeight: 600 }}>Modern Home</Link></li>
              <li><Link href="/products?category=stationery" style={{ fontWeight: 600 }}>Stationery</Link></li>
              <li><Link href="/products" style={{ fontWeight: 600 }}>Gift Sets</Link></li>
            </ul>
          </div>

          {/* Maison */}
          <div className="footer-col">
            <h5 style={{ color: 'black', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem' }}>INFO</h5>
            <ul className="footer-links">
              <li><Link href="#" style={{ fontWeight: 600 }}>Philosophy</Link></li>
              <li><Link href="#" style={{ fontWeight: 600 }}>Logistics</Link></li>
              <li><Link href="#" style={{ fontWeight: 600 }}>Packaging</Link></li>
              <li><Link href="#" style={{ fontWeight: 600 }}>Privacy</Link></li>
              <li><Link href="#" style={{ fontWeight: 600 }}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5 style={{ color: 'black', letterSpacing: '0.1em', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem' }}>CONNECT</h5>
            <div style={{ marginTop: '2rem' }}>
              <a href="mailto:hello@giftaura.com" style={{ color: 'black', fontWeight: 800, display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>hello@giftaura.com</a>
              <a href="tel:+923001234567" style={{ opacity: 0.4, fontWeight: 700 }}>+92 300 1234567</a>
              <p style={{ color: 'rgba(0,0,0,0.3)', fontSize: '0.8rem', marginTop: '1.5rem', lineHeight: 1.6, fontWeight: 700 }}>
                Main Boulevard, Gulberg III<br/>Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ marginTop: '8rem', borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '3rem', opacity: 0.3, fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          <span>© {new Date().getFullYear()} GIFTAURA PREMIER. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <Link href="#">TERMS</Link>
            <Link href="#">DATA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
