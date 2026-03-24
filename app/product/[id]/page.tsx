"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductById } from '../../../data/products';
import { useCart, Product } from '../../../context/CartContext';
import { useToast } from '../../../context/ToastContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (id) {
      setProduct(getProductById(id as string));
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    addToast(`${quantity}X ${product.name.toUpperCase()} ADDED!`);
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  if (loading) {
    return (
      <div className="container section">
        <div className="detail-layout">
          <div className="skeleton" style={{ height: 600, borderRadius: 'var(--r-md)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem' }}>
            <div className="skeleton" style={{ height: 16, width: '25%' }} />
            <div className="skeleton" style={{ height: 48, width: '80%' }} />
            <div className="skeleton" style={{ height: 32, width: '40%' }} />
            <div className="skeleton" style={{ height: 120, width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return (
    <div className="container section" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontWeight: 900, fontSize: '3rem' }}>NOT FOUND.</h1>
      <Link href="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>BACK TO STORE</Link>
    </div>
  );

  return (
    <div className="container section" style={{ paddingTop: '7rem' }}>
      {/* Breadcrumb */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '3rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
        <Link href="/">Home</Link>
        <span style={{ opacity: 0.2 }}>/</span>
        <Link href="/products">Products</Link>
        <span style={{ opacity: 0.2 }}>/</span>
        <span style={{ color: 'var(--text)', fontWeight: 700 }}>{product.name}</span>
      </nav>

      <div className="detail-layout" style={{ gap: '4rem' }}>
        {/* Image */}
        <div className="detail-image-box" style={{ borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Info */}
        <div style={{ paddingTop: '1rem' }}>
          <p className="detail-category-label" style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            {product.category}
          </p>
          <h1 className="detail-title" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>{product.name}</h1>

          <div style={{ marginBottom: '2.5rem' }}>
            <span className="detail-price" style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--text)' }}>Rs. {product.price.toLocaleString()}</span>
          </div>

          <div className="detail-desc" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            {product.description}
          </div>

          <div className="detail-actions" style={{ display: 'flex', gap: '1rem' }}>
            <div className="qty-stepper" style={{ height: '60px', borderRadius: 'var(--r-md)', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '50px' }}
              >−</button>
              <span className="qty-count" style={{ minWidth: '40px' }}>{quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '50px' }}
              >+</button>
            </div>
            <button 
              disabled={added}
              onClick={handleAddToCart}
              className="btn btn-primary" 
              style={{ flex: 1, height: '60px', borderRadius: 'var(--r-md)', fontSize: '1rem', fontWeight: 700 }}
            >
              {added ? 'Added to bag' : 'Add to bag'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
