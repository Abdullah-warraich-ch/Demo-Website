"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Collections', href: '/products' },
    { name: 'Candles', href: '/products?category=candles' },
    { name: 'Wellness', href: '/products?category=bath' },
    { name: 'Home', href: '/products?category=home' },
    { name: 'Stores', href: '#' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <Link href="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon" style={{ background: 'black', boxShadow: 'none', borderRadius: '4px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H4v4"/><rect width="18" height="12" x="3" y="8" rx="2"/><path d="M12 22V8"/><path d="M7 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/><path d="M12 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/></svg>
            </div>
            <span style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1.25rem', letterSpacing: '-0.06em' }}>GiftAura</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav desktop-only">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="nav-link" style={{ fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <Link href="/cart" className="cart-btn" style={{ background: 'black', color: '#fff', borderRadius: '6px' }} onClick={() => setMobileMenuOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className="desktop-only" style={{ marginLeft: '0.25rem', fontWeight: 800 }}>GET</span>
              {mounted && totalItems > 0 && (
                <span className="cart-badge" style={{ color: 'black', fontWeight: 900 }}>{totalItems}</span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} 
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'rgba(0,0,0,0.05)', marginLeft: '0.5rem' }}
            >
              <div className="menu-icon-inner" style={{ color: 'black' }}>
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-menu-content" style={{ background: 'white' }} onClick={e => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="logo" style={{ fontWeight: 900, textTransform: 'uppercase' }}>GiftAura</div>
            <button className="close-btn" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 800 }}>CLOSE</button>
          </div>
          <nav className="mobile-nav">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                style={{ animationDelay: `${i * 0.05}s`, fontWeight: 800, border: 'none', padding: '1.25rem 0', fontSize: '2.5rem', letterSpacing: '-0.06em' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <p className="footer-label" style={{ fontWeight: 800 }}>COLLECTIONS</p>
            <Link href="/products" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontWeight: 700, borderRadius: 'var(--r-md)' }} onClick={() => setMobileMenuOpen(false)}>
              View All Items
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
