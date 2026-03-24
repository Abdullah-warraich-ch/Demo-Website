"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

const RATINGS: Record<string, number> = {
  "1": 4.8, "2": 4.6, "3": 4.9, "4": 4.7, "5": 4.5, "6": 4.8, "7": 4.6, "8": 4.9, "9": 4.7, "10": 4.5, "11": 4.8, "12": 4.6
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [added, setAdded] = useState(false);
  const rating = RATINGS[product.id] ?? 4.7;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    addToast(`${product.name} Added!`);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link href={`/product/${product.id}`} className="product-card animate-fade-up">
      {/* Image */}
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.featured && (
          <span className="badge-featured" style={{ background: 'black', color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            Featured
          </span>
        )}
        <div className="product-overlay" style={{ opacity: added ? 1 : undefined }}>
          <button 
            className="product-quick-add" 
            onClick={handleQuickAdd}
            style={added ? { 
              background: 'black', 
              color: 'white', 
              opacity: 1, 
              transform: 'translateY(0)' 
            } : {
              background: 'rgba(255,255,255,0.95)',
              color: 'black',
              fontSize: '0.8rem',
              fontWeight: 700
            }}
            disabled={added}
          >
            {added ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M20 6 9 17l-5-5"/></svg>
                Added
              </span>
            ) : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="product-info" style={{ padding: '1rem' }}>
        <p className="product-category" style={{ letterSpacing: '0.05em', fontWeight: 700, color: 'var(--accent)', fontSize: '0.65rem' }}>
          {product.category}
        </p>
        <h3 className="product-name" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>{product.name}</h3>
        <div className="product-meta">
          <span className="product-price" style={{ fontWeight: 700, color: 'var(--text)' }}>Rs. {product.price.toLocaleString()}</span>
          <span className="product-rating" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{ position: 'relative', top: '-1px' }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span style={{ marginLeft: '0.2rem' }}>{rating}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
