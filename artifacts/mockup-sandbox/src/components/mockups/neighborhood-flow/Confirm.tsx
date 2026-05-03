import React from 'react';
import { MapPin, RotateCcw, Zap } from 'lucide-react';
import './_group.css';

export function Confirm() {
  return (
    <div
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--nb-bg)',
        WebkitFontSmoothing: 'antialiased',
        fontFamily: "'Inter', sans-serif",
        color: 'var(--nb-text)',
      }}
    >
      {/* Header wordmark */}
      <div className="flex items-center gap-1.5 px-6 py-5 shrink-0">
        <MapPin size={14} strokeWidth={2.5} color="var(--nb-accent)" />
        <span className="font-playfair text-lg font-bold leading-none" style={{ color: 'var(--nb-text)' }}>Streetwise</span>
      </div>

      {/* Centered content — grows to fill space */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center stagger-in stagger-1">

        {/* Success icon — layered shadow, concentric radius */}
        <div
          className="flex items-center justify-center mb-6"
          style={{
            width: 80,
            height: 80,
            borderRadius: 24,
            backgroundColor: '#D1FAE5',
            boxShadow: '0 2px 4px rgba(5,150,105,0.1), 0 8px 24px rgba(5,150,105,0.15)',
          }}
        >
          <svg
            width={36}
            height={36}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" className="animate-draw-check" />
          </svg>
        </div>

        <h1
          className="font-playfair text-[38px] leading-tight mb-3"
          style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
        >
          Report sent!
        </h1>

        <p
          className="text-sm mb-10 max-w-[260px]"
          style={{ color: 'var(--nb-muted)', textWrap: 'pretty', lineHeight: 1.6 }}
        >
          Check sarah@kwrealty.com — should arrive in under a minute.
        </p>

        <div className="w-full border-t mb-8" style={{ borderColor: 'var(--nb-border)' }} />

        {/* Generate another — ghost button, hit area ≥ 44px */}
        <button
          className="w-full flex items-center justify-center gap-2 border font-medium text-sm transition-[transform,background-color] duration-150 active:scale-[0.96] mb-3"
          style={{
            height: 48,
            borderRadius: 14,
            borderColor: 'var(--nb-border)',
            color: 'var(--nb-text)',
            backgroundColor: 'transparent',
          }}
        >
          <RotateCcw size={15} />
          Generate another report
        </button>

        {/* Upsell card — concentric radius: card rounded-[18px], inner button needs radius = 18-16=2px → use rounded-sm */}
        <div
          className="w-full text-left p-4 stagger-in stagger-2"
          style={{
            backgroundColor: 'var(--nb-accent-light)',
            borderRadius: 18,
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(217,119,6,0.08)',
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="flex items-center justify-center shrink-0 mt-0.5"
              style={{ width: 32, height: 32, borderRadius: 8, backgroundColor: 'var(--nb-accent)', color: 'white' }}
            >
              <Zap size={15} />
            </div>
            <div>
              <h3 className="font-semibold text-sm leading-tight mb-1" style={{ color: 'var(--nb-text)' }}>
                Weekly auto-refreshes for active listings
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--nb-accent)', textWrap: 'pretty' }}>
                Keep your clients updated automatically.
              </p>
            </div>
          </div>
          {/* Concentric: card is rounded-[18px], padding is p-4 (16px) → inner radius = 18-16 = 2px */}
          <button
            className="w-full font-semibold text-sm text-white transition-[transform,opacity] duration-150 active:scale-[0.96]"
            style={{
              height: 44,
              borderRadius: 6,
              backgroundColor: 'var(--nb-accent)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 2px 8px rgba(217,119,6,0.3)',
            }}
          >
            Upgrade to Pro — $29/mo
          </button>
        </div>
      </div>

      {/* Footer — outside scroll area, always visible */}
      <div className="shrink-0 pb-5 text-center">
        <span className="text-[11px]" style={{ color: 'var(--nb-muted)' }}>
          Streetwise · getstreetwise.com
        </span>
      </div>
    </div>
  );
}
