"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const FOOTER_LINKS = {
  catalog: [
    { label: 'All Products',       href: '/products' },
    { label: 'Candles & Fragrance', href: '/products?category=candles' },
    { label: 'Wellness & Bath',    href: '/products?category=bath' },
    { label: 'Home Decor',         href: '/products?category=home' },
    { label: 'Stationery',         href: '/products?category=stationery' },
    { label: 'Gift Sets',          href: '/products' },
  ],
  info: [
    { label: 'About GiftAura',  href: '#' },
    { label: 'Our Story',       href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Returns & Refunds', href: '#' },
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Contact Us',      href: '#' },
  ],
};

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12a4 4 0 1 1 8 0c0 2-1 3-2 4l-1 4"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="site-footer">
      {/* ── Top CTA Band ── */}
      <div className="footer-cta-band">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <p className="footer-cta-label">Don't miss out</p>
            <h3 className="footer-cta-heading">Get exclusive drops &amp; first access to new arrivals.</h3>
          </div>
          <form className="footer-mini-form" onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className="footer-subscribed">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                You're on the list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="footer-mini-input"
                  required
                />
                <button type="submit" className="footer-mini-btn">Subscribe</button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="footer-body">
        <div className="container footer-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12V8H4v4"/><rect width="18" height="12" x="3" y="8" rx="2"/>
                  <path d="M12 22V8"/>
                  <path d="M7 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/>
                  <path d="M12 3h5c1.1 0 2 .9 2 2a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"/>
                </svg>
              </div>
              <span>GiftAura</span>
            </Link>
            <p className="footer-brand-desc">
              Pakistan's premier destination for curated premium lifestyle essentials. Hand-picked quality, delivered with care.
            </p>

            {/* Social icons */}
            <div className="footer-socials">
              {SOCIALS.map(s => (
                <a key={s.name} href={s.href} className="footer-social-icon" aria-label={s.name} title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="footer-trust">
              <span className="footer-trust-badge">🔒 Secure Checkout</span>
              <span className="footer-trust-badge">🔁 30-Day Returns</span>
              <span className="footer-trust-badge">🎁 Gift Packaging</span>
            </div>
          </div>

          {/* Catalog links */}
          <div className="footer-link-col">
            <h5 className="footer-col-heading">Catalog</h5>
            <ul className="footer-link-list">
              {FOOTER_LINKS.catalog.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div className="footer-link-col">
            <h5 className="footer-col-heading">Information</h5>
            <ul className="footer-link-list">
              {FOOTER_LINKS.info.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-link-col">
            <h5 className="footer-col-heading">Contact Us</h5>
            <div className="footer-contact-list">
              <a href="mailto:hello@giftaura.com" className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@giftaura.com
              </a>
              <a href="tel:+923001234567" className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +92 300 123 4567
              </a>
              <div className="footer-contact-item" style={{ alignItems: 'flex-start', cursor: 'default' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Main Boulevard, Gulberg III<br />Lahore, Pakistan</span>
              </div>
              <div className="footer-hours">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Mon – Sat, 10am – 8pm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <span className="footer-copyright">
            © {new Date().getFullYear()} GiftAura Pakistan. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <Link href="#" className="footer-bottom-link">Privacy</Link>
            <Link href="#" className="footer-bottom-link">Terms</Link>
            <Link href="#" className="footer-bottom-link">Cookies</Link>
          </div>
          <div className="footer-payment-icons">
            <span className="footer-payment-badge">JazzCash</span>
            <span className="footer-payment-badge">EasyPaisa</span>
            <span className="footer-payment-badge">COD</span>
            <span className="footer-payment-badge">Bank</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
