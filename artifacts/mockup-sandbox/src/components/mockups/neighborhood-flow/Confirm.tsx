import React from 'react';
import { Check } from 'lucide-react';
import './_group.css';

export function Confirm() {
  return (
    <div className="nb-container flex flex-col p-6 w-full max-w-md mx-auto justify-center">
      <div className="flex flex-col items-center text-center stagger-in stagger-1">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-emerald-100">
          <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" className="animate-draw-check" />
          </svg>
        </div>

        <h1 
          className="font-playfair text-[40px] leading-tight mb-3" 
          style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
        >
          Report sent!
        </h1>
        
        <p 
          className="text-base mb-10 px-4" 
          style={{ color: 'var(--nb-muted)', textWrap: 'balance' }}
        >
          Check sarah@kwrealty.com — should arrive in under a minute.
        </p>

        <div className="w-full border-t mb-10" style={{ borderColor: 'var(--nb-border)' }}></div>

        <button 
          className="w-full h-14 rounded-xl font-medium border-2 mb-6 transition-all hover:bg-black/5 active:scale-[0.98]"
          style={{ 
            borderColor: 'var(--nb-border)',
            color: 'var(--nb-text)'
          }}
        >
          Generate another report
        </button>

        <div className="w-full p-5 rounded-xl text-left shadow-sm stagger-in stagger-2" style={{ backgroundColor: 'var(--nb-accent-light)' }}>
          <h3 className="font-semibold mb-1" style={{ color: 'var(--nb-text)' }}>Want weekly auto-refreshes for active listings?</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--nb-accent)' }}>Keep your clients updated automatically.</p>
          <button className="px-4 py-2 rounded-lg font-medium text-sm text-white shadow-sm transition-transform hover:scale-105 active:scale-95" style={{ backgroundColor: 'var(--nb-accent)' }}>
            Upgrade to Pro — $39/mo
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center stagger-in stagger-3">
        <span className="text-[11px]" style={{ color: 'var(--nb-muted)' }}>
          Powered by Neighborhood Brief · yourproduct.com
        </span>
      </div>
    </div>
  );
}
