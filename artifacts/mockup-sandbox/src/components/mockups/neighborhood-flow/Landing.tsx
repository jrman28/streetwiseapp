import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, MessageCircle, ArrowRight, Footprints } from 'lucide-react';
import './_group.css';

export function Landing() {
  return (
    <div className="nb-container flex flex-col p-6 w-full" style={{ WebkitFontSmoothing: 'antialiased' }}>

      {/* Wordmark — Streetwise */}
      <div className="flex items-center gap-1.5 mb-12 stagger-in stagger-1">
        <MapPin size={14} strokeWidth={2.5} color="var(--nb-accent)" />
        <span className="font-playfair text-lg font-bold leading-none" style={{ color: 'var(--nb-text)' }}>Streetwise</span>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1
          className="font-playfair text-[32px] leading-tight mb-4 stagger-in stagger-2"
          style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
        >
          Know the neighborhood before your client asks.
        </h1>

        <p
          className="text-base mb-8 stagger-in stagger-3"
          style={{ color: 'var(--nb-muted)', textWrap: 'pretty' }}
        >
          Enter a zip code. Get a one-page intelligence report in under 60 seconds.
        </p>

        {/* Input + Button — concentric radius: input rounded-xl (12px), button padding-right 8px → inner radius = 12-8 = 4px */}
        <div className="relative w-full mb-4 stagger-in stagger-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin size={18} color="var(--nb-muted)" />
          </div>
          <input
            type="text"
            placeholder="Enter zip code — e.g. 30318"
            className="w-full h-14 pl-11 pr-[52px] rounded-xl text-base focus:outline-none transition-[box-shadow] duration-200"
            style={{
              backgroundColor: 'var(--nb-surface)',
              color: 'var(--nb-text)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.06)',
              fontVariantNumeric: 'tabular-nums',
            }}
          />
          {/* Concentric: outer rounded-xl (12px radius), pr-2 (8px) gap → inner radius = 12-8 = 4px = rounded */}
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button
              className="w-10 h-10 rounded flex items-center justify-center transition-[transform,background-color] duration-150 active:scale-[0.96]"
              style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}
              aria-label="Generate report"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center mb-10 stagger-in stagger-4">
          <span className="text-xs" style={{ color: 'var(--nb-muted)' }}>Used by 2,400+ agents across 38 states</span>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 stagger-in stagger-5">
          {[
            { icon: <BookOpen size={13} />, label: 'Schools' },
            { icon: <UtensilsCrossed size={13} />, label: 'Dining' },
            { icon: <Footprints size={13} />, label: 'Walkability' },
            { icon: <MessageCircle size={13} />, label: 'Reddit Says' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 border text-xs font-medium"
              style={{
                backgroundColor: 'var(--nb-bg)',
                borderColor: 'var(--nb-border)',
                color: 'var(--nb-text)',
                borderRadius: 99,
              }}
            >
              <span style={{ color: 'var(--nb-muted)', display: 'flex' }}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-auto pt-8 pb-2 stagger-in stagger-6">
        <span className="text-xs" style={{ color: 'var(--nb-muted)' }}>14-day free trial · No credit card required</span>
      </div>
    </div>
  );
}
