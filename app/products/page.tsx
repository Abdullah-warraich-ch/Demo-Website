"use client";

import React, { Suspense, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/ProductCard';
import { getProducts, getProductsByCategory } from '../../data/products';

const CATEGORIES = [
  { value: '',           label: 'ALL ITEMS' },
  { value: 'candles',   label: 'FRAGRANCE' },
  { value: 'bath',      label: 'WELLNESS' },
  { value: 'home',      label: 'MODERN HOME' },
  { value: 'stationery',label: 'STATIONERY' },
  { value: 'food',      label: 'GOURMET' },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const products = useMemo(() => {
    let filtered = categoryFilter ? getProductsByCategory(categoryFilter) : getProducts();
    if (searchQuery.trim()) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [categoryFilter, searchQuery]);

  const currentLabel = CATEGORIES.find(c => c.value === (categoryFilter ?? ''))?.label ?? 'ALL ITEMS';

  return (
    <div className="container section" style={{ paddingTop: '7rem' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '5rem' }}>
        <p className="section-eyebrow" style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.1em' }}>INVENTORY</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h1 className="section-title" style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-0.07em' }}>
              {searchQuery ? `SEARCH: "${searchQuery.toUpperCase()}"` : currentLabel}
            </h1>
            <p className="section-sub" style={{ fontSize: '1.2rem', fontWeight: 500 }}>CURATED LIFESTYLE ESSENTIALS DISCOVERED FOR YOU.</p>
          </div>
          <span style={{
            fontSize: '0.9rem',
            color: 'white',
            background: 'black',
            padding: '0.6rem 1.5rem',
            borderRadius: 'var(--r-md)',
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}>
            {products.length} {products.length === 1 ? 'SLOT' : 'SLOTS'}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4" style={{ marginBottom: '5rem' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '700px' }}>
          <input
            type="text"
            placeholder="TYPE TO SEARCH..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
            style={{ 
              paddingLeft: '3.5rem', 
              background: 'rgba(0,0,0,0.03)', 
              height: '64px',
              fontSize: '1rem',
              fontWeight: 700,
              borderRadius: 'var(--r-md)',
              border: 'none'
            }}
          />
          <svg 
            width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }}
          >
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </div>

        {/* Filter Pills */}
        <div className="filter-strip" style={{ marginTop: '0.75rem' }}>
          {CATEGORIES.map(cat => {
            const isActive = (categoryFilter === null && cat.value === '') || categoryFilter === cat.value;
            return (
              <Link
                key={cat.value}
                href={cat.value ? `/products?category=${cat.value}` : '/products'}
                className={`filter-pill ${isActive ? 'filter-pill-active' : ''}`}
                style={{ 
                  fontWeight: 800, 
                  fontSize: '0.75rem', 
                  padding: '0.75rem 1.5rem',
                  letterSpacing: '0.05em',
                  borderRadius: 'var(--r-md)',
                  background: isActive ? 'black' : 'rgba(0,0,0,0.05)',
                  color: isActive ? 'white' : 'black',
                  borderColor: 'transparent'
                }}
                onClick={() => setSearchQuery('')}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="grid grid-4" style={{ gap: '2rem' }}>
          {products.map((product, i) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(i * 0.05, 0.3)}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state" style={{ background: 'rgba(0,0,0,0.02)', borderRadius: 'var(--r-md)', minHeight: '50vh' }}>
          <div className="empty-icon" style={{ background: 'black', color: 'white' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900 }}>NOT FOUND.</h3>
          <p style={{ maxWidth: '400px', fontWeight: 500, opacity: 0.6 }}>THE SELECTION YOU ARE LOOKING FOR DOES NOT EXIST IN THIS CATALOG.</p>
          <button onClick={() => setSearchQuery('')} className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontWeight: 900 }}>
            CLEAR SYSTEM
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container section"><div className="skeleton" style={{ height: 600 }} /></div>}>
      <ProductsContent />
    </Suspense>
  );
}
