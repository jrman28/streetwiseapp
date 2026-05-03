import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, Footprints, Home, Shield, MessageCircle, Share, TrendingUp, AlertTriangle } from 'lucide-react';
import './_group.css';

export function Report() {
  return (
    <div className="nb-container flex flex-col w-full max-w-md mx-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-2">
        <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--nb-text)' }}>NEIGHBORHOOD BRIEF</span>
        <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
          <Share size={18} color="var(--nb-text)" />
        </button>
      </div>

      {/* Title Area */}
      <div className="px-6 mb-6 stagger-in stagger-1">
        <h1 
          className="font-playfair text-[36px] leading-tight mb-2" 
          style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
        >
          30318 · West Midtown, Atlanta
        </h1>
        <p className="text-xs mb-4" style={{ color: 'var(--nb-muted)' }}>
          Generated May 3, 2026 · For Sarah Chen, Keller Williams
        </p>
        <div className="inline-flex items-center px-2 py-1 rounded-md" style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}>
          <span className="text-[10px] font-bold uppercase tracking-wider">Ready to share</span>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4">
        
        {/* Schools */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-2" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} color="var(--nb-accent)" />
            <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>Schools</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { level: 'Elementary', name: 'Hollis Innovation Academy', score: 7 },
              { level: 'Middle', name: 'Inman Middle School', score: 8 },
              { level: 'High', name: 'Grady High School', score: 6 },
            ].map((school, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs" style={{ color: 'var(--nb-muted)' }}>{school.level}</span>
                  <span className="text-sm font-medium">{school.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${school.score * 10}%`, backgroundColor: 'var(--nb-accent)' }}></div>
                  </div>
                  <span className="text-sm font-bold tabular-nums w-8 text-right">{school.score}/10</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Dining */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-3" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed size={18} color="var(--nb-text)" />
            <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>Top Dining</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Bacchanalia', score: '4.7', type: 'Fine dining' },
              { name: 'Bartaco', score: '4.4', type: 'Casual' },
              { name: 'Eight Sushi', score: '4.5', type: 'Japanese' },
            ].map((rest, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-medium">{rest.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tabular-nums">{rest.score}★</span>
                  <span className="text-xs w-20 text-right" style={{ color: 'var(--nb-muted)' }}>{rest.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Walkability */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-4" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Footprints size={18} color="var(--nb-text)" />
            <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>Walkability</h2>
          </div>
          <div className="flex justify-between px-2">
            {[
              { label: 'Walk', score: 82, color: '#059669' },
              { label: 'Transit', score: 54, color: 'var(--nb-accent)' },
              { label: 'Bike', score: 71, color: '#2563EB' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-2 border-4"
                  style={{ borderColor: item.color }}
                >
                  <span className="font-playfair text-xl font-bold tabular-nums">{item.score}</span>
                </div>
                <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Market Snapshot */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-5" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} color="var(--nb-text)" />
            <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>Market Snapshot</h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: 'var(--nb-border)' }}>
              <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>Median Price</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tabular-nums">$485,000</span>
                <span className="text-xs font-bold" style={{ color: 'var(--nb-success)' }}>+4.2% YoY</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>Avg Days on Market</span>
              <span className="text-sm font-bold tabular-nums">28 days</span>
            </div>
          </div>
        </div>

        {/* What Residents Say */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-6" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} color="var(--nb-text)" />
              <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>What Residents Say</h2>
            </div>
            <div className="inline-flex items-center px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}>
              <span className="text-[9px] font-bold uppercase tracking-wider">Exclusive</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="p-3 rounded-lg border text-sm italic" style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)' }}>
              "Best food scene in Atlanta. Parking is a nightmare since the new condos."
              <div className="flex justify-between items-center mt-2 not-italic text-xs font-medium">
                <span style={{ color: 'var(--nb-accent)' }}>r/Atlanta</span>
                <span style={{ color: 'var(--nb-muted)' }}>234 upvotes · 12d ago</span>
              </div>
            </div>
            <div className="p-3 rounded-lg border text-sm italic" style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)' }}>
              "Great for young professionals. Not as family-friendly as Decatur."
              <div className="flex justify-between items-center mt-2 not-italic text-xs font-medium">
                <span style={{ color: 'var(--nb-accent)' }}>r/AtlantaHousing</span>
                <span style={{ color: 'var(--nb-muted)' }}>89 upvotes</span>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-1 p-2 rounded-md" style={{ backgroundColor: 'var(--nb-accent-light)' }}>
              <AlertTriangle size={14} color="var(--nb-accent)" className="shrink-0 mt-0.5" />
              <span className="text-xs font-medium" style={{ color: 'var(--nb-text)' }}>3 threads mention construction noise on Howell Mill</span>
            </div>
          </div>
        </div>

        {/* Crime & Safety */}
        <div className="p-5 rounded-xl shadow-sm stagger-in stagger-6" style={{ backgroundColor: 'var(--nb-surface)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} color="var(--nb-text)" />
            <h2 className="font-semibold text-base" style={{ color: 'var(--nb-text)' }}>Crime & Safety</h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm w-2/3" style={{ color: 'var(--nb-muted)' }}>Crime rate 18% below city average. Violent crime: Low.</p>
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                <div className="w-4 h-2 rounded-sm" style={{ backgroundColor: 'var(--nb-success)' }}></div>
                <div className="w-4 h-2 rounded-sm" style={{ backgroundColor: 'var(--nb-border)' }}></div>
                <div className="w-4 h-2 rounded-sm" style={{ backgroundColor: 'var(--nb-border)' }}></div>
              </div>
              <span className="text-[10px] font-bold uppercase">Low</span>
            </div>
          </div>
        </div>

      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t backdrop-blur-md bg-white/80 z-10" style={{ borderColor: 'var(--nb-border)' }}>
        <div className="max-w-md mx-auto">
          <button 
            className="w-full h-12 rounded-xl font-semibold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: 'var(--nb-accent)' }}
          >
            Email this report
          </button>
        </div>
      </div>
    </div>
  );
}
