import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, Footprints, Home, Shield, MessageCircle, Check } from 'lucide-react';
import './_group.css';

export function Generating() {
  return (
    <div className="nb-container flex flex-col p-6 w-full max-w-md mx-auto animate-subtle-pulse-bg">
      <div className="flex items-center gap-2 mb-8">
        <MapPin size={16} color="var(--nb-muted)" />
        <span className="text-sm font-medium" style={{ color: 'var(--nb-muted)' }}>Neighborhood Brief</span>
      </div>

      <div className="inline-flex items-center self-start px-3 py-1 rounded-full mb-6 stagger-in stagger-1" style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}>
        <span className="text-xs font-semibold tabular-nums">30318 · West Midtown, Atlanta, GA</span>
      </div>

      <h1 
        className="font-playfair text-[32px] leading-tight mb-2 stagger-in stagger-2" 
        style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
      >
        Building your report...
      </h1>
      
      <p 
        className="text-base mb-8 stagger-in stagger-2" 
        style={{ color: 'var(--nb-muted)', textWrap: 'balance' }}
      >
        Scanning 6 sources in real time
      </p>

      <div className="flex flex-col gap-3 mb-12">
        {/* Done */}
        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm stagger-in stagger-3" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <BookOpen size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">GreatSchools — School ratings</span>
          </div>
          <div className="flex items-center gap-1">
            <Check size={16} color="var(--nb-success)" />
            <span className="text-xs font-medium" style={{ color: 'var(--nb-success)' }}>Done</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm stagger-in stagger-3" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <UtensilsCrossed size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">Yelp — Top Dining</span>
          </div>
          <div className="flex items-center gap-1">
            <Check size={16} color="var(--nb-success)" />
            <span className="text-xs font-medium" style={{ color: 'var(--nb-success)' }}>Done</span>
          </div>
        </div>

        {/* In Progress */}
        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm stagger-in stagger-4" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <MessageCircle size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">Reddit — Sentiment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: 'var(--nb-accent)' }}></div>
            <span className="text-xs font-medium" style={{ color: 'var(--nb-accent)' }}>Scanning...</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm stagger-in stagger-4" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <Home size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">MLS — Market Snapshot</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: 'var(--nb-accent)' }}></div>
            <span className="text-xs font-medium" style={{ color: 'var(--nb-accent)' }}>Scanning...</span>
          </div>
        </div>

        {/* Waiting */}
        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm opacity-60 stagger-in stagger-5" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <Footprints size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">WalkScore — Walkability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--nb-muted)' }}></div>
            <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>Queued</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl shadow-sm opacity-60 stagger-in stagger-5" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-3">
            <Shield size={18} color="var(--nb-muted)" />
            <span className="text-sm font-medium">Local PD — Crime & Safety</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--nb-muted)' }}></div>
            <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>Queued</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pb-8 stagger-in stagger-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>Estimated: 45 seconds</span>
          <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--nb-text)' }}>65%</span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--nb-border)' }}>
          <div className="h-full animate-progress-fill" style={{ backgroundColor: 'var(--nb-accent)' }}></div>
        </div>
      </div>
    </div>
  );
}
