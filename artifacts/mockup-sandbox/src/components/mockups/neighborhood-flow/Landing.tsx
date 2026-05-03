import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, MessageCircle, ArrowRight } from 'lucide-react';
import './_group.css';

export function Landing() {
  return (
    <div className="nb-container flex flex-col p-6 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-12 stagger-in stagger-1">
        <MapPin size={16} color="var(--nb-muted)" />
        <span className="text-sm font-medium" style={{ color: 'var(--nb-muted)' }}>Neighborhood Brief</span>
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
          style={{ color: 'var(--nb-muted)', textWrap: 'balance' }}
        >
          Enter a zip code. Get a one-page intelligence report in under 60 seconds.
        </p>

        <div className="relative w-full mb-4 stagger-in stagger-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin size={20} color="var(--nb-muted)" />
          </div>
          <input 
            type="text" 
            placeholder="Enter zip code e.g. 30318" 
            className="w-full h-14 pl-12 pr-14 rounded-xl text-lg focus:outline-none focus:ring-2 transition-all shadow-sm"
            style={{ 
              backgroundColor: 'var(--nb-surface)', 
              color: 'var(--nb-text)',
            }}
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button 
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 stagger-in stagger-4">
          <span className="text-xs" style={{ color: 'var(--nb-muted)' }}>Used by 2,400+ agents across 38 states</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 stagger-in stagger-5">
          <div 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
            style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}
          >
            <BookOpen size={14} color="var(--nb-muted)" />
            <span className="pt-[1px]">Schools</span>
          </div>
          <div 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
            style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}
          >
            <UtensilsCrossed size={14} color="var(--nb-muted)" />
            <span className="pt-[1px]">Dining & Walkability</span>
          </div>
          <div 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
            style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}
          >
            <MessageCircle size={14} color="var(--nb-muted)" />
            <span className="pt-[1px]">What Reddit Says</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-auto pb-4 stagger-in stagger-6">
        <span className="text-xs" style={{ color: 'var(--nb-muted)' }}>14-day free trial · No credit card required</span>
      </div>
    </div>
  );
}
