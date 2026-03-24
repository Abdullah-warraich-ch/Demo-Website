"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checked, setChecked] = useState(false);

  const shipping = totalPrice >= 2000 ? 0 : 200;
  const tax = +(totalPrice * 0.05).toFixed(2);
  const total = totalPrice + shipping + tax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setChecked(true);
      clearCart();
      setIsCheckingOut(false);
    }, 2800);
  };

  if (checked) {
    return (
      <div className="empty-state container section" style={{ minHeight: '70vh' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white',
          marginBottom: '2rem'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Order Confirmed</h1>
        <p style={{ maxWidth: 460, textAlign: 'center', fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          Thank you for your order! We'll send you a confirmation email with tracking details shortly.
        </p>
        <Link href="/products" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontWeight: 700, borderRadius: 'var(--r-md)' }}>Back to Shopping</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-state container section" style={{ minHeight: '60vh' }}>
        <div className="empty-icon" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Your bag is empty</h1>
        <p style={{ maxWidth: 440, textAlign: 'center', fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/products" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontWeight: 700 }}>Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container section" style={{ paddingTop: '7rem' }}>
      {/* Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p className="section-eyebrow" style={{ color: 'var(--accent)', fontWeight: 800 }}>SHOPPING BAG</p>
          <h1 className="section-title" style={{ fontSize: '3rem', fontWeight: 800 }}>Your Cart
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '1rem' }}>
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </h1>
        </div>
        <button onClick={clearCart} style={{
          fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          padding: '0.6rem 1.25rem', border: '1px solid var(--border)', borderRadius: 'var(--r-md)',
          transition: 'all 0.2s'
        }}>
          Clear all
        </button>
      </div>

      <div className="cart-page-layout">
        {/* Cart Items */}
        <div style={{ background: 'white', padding: '0', borderRadius: 'var(--r-md)', border: 'none' }}>
          {cart.map((item) => (
            <div key={item.product.id} className="cart-item animate-fade-up" style={{ padding: '2.5rem 0', gap: '2.5rem', borderBottom: '2px solid rgba(0,0,0,0.05)' }}>
              {/* Thumbnail */}
              <Link href={`/product/${item.product.id}`} style={{ width: '130px', flexShrink: 0 }}>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cart-thumbnail"
                  style={{ borderRadius: '6px', background: 'rgba(0,0,0,0.03)' }}
                />
              </Link>

              {/* Info */}
              <div style={{ minWidth: 0, flex: 1 }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                  {item.product.category}
                </p>
                <Link href={`/product/${item.product.id}`} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', display: 'block', marginBottom: '0.5rem' }}>
                  {item.product.name}
                </Link>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>
                  Rs. {item.product.price.toLocaleString()}
                </p>
              </div>

              {/* Actions */}
              <div className="cart-item-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                <button className="remove-btn" onClick={() => removeFromCart(item.product.id)} style={{ padding: '0', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Remove
                </button>
                <div className="qty-stepper" style={{ height: '44px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                  <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                  <span className="qty-count">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Subtotal: Rs. {(item.product.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          {/* Continue shopping */}
          <div style={{ marginTop: '4rem' }}>
            <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', color: 'black', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>
              RESUME DISCOVERY
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="cart-summary-card" style={{ padding: '3rem', background: 'var(--text)', color: 'white', borderRadius: 'var(--r-md)', top: '120px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem' }}>Order Summary</h2>

          <div className="summary-row" style={{ fontSize: '0.95rem', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ fontWeight: 500, opacity: 0.6 }}>Subtotal ({totalItems} items)</span>
            <span style={{ fontWeight: 700 }}>Rs. {totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row" style={{ fontSize: '0.95rem', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ fontWeight: 500, opacity: 0.6 }}>Shipping</span>
            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>
              {shipping === 0 ? 'Free' : `Rs. ${shipping}`}
            </span>
          </div>
          <div className="summary-row" style={{ fontSize: '0.95rem', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ fontWeight: 500, opacity: 0.6 }}>Tax (5%)</span>
            <span style={{ fontWeight: 700 }}>Rs. {tax.toLocaleString()}</span>
          </div>

          <div className="summary-divider" style={{ background: 'rgba(255,255,255,0.1)', height: '1px', margin: '2rem 0' }} />

          <div className="summary-total" style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 800 }}>
            <span>Total</span>
            <span>Rs. {total.toLocaleString()}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            className="btn btn-primary"
            style={{ width: '100%', height: '64px', fontSize: '1rem', background: 'white', color: 'black', fontWeight: 700, borderRadius: 'var(--r-md)' }}
          >
            {isCheckingOut ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', justifyContent: 'center' }}>
                <span style={{ width: 18, height: 18, border: '2px solid rgba(0,0,0,0.1)', borderTopColor: 'black', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
                Processing...
              </span>
            ) : 'Checkout Now'}
          </button>

          {/* Secure strip */}
          <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, text: 'ENCRYPTED SESSION' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0 5.4 5.4 0 0 0 0 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65Z"/></svg>, text: 'MODERN SIGNATURE PACK' },
            ].map((f, i) => (
              <p key={i} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 800 }}>
                {f.icon}
                {f.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
