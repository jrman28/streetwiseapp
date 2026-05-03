import React from 'react';
import { ArrowLeft, BookOpen, UtensilsCrossed, Footprints, Shield, MessageCircle, Share, TrendingUp, AlertTriangle } from 'lucide-react';
import './_group.css';

export function Report() {
  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--nb-bg)', WebkitFontSmoothing: 'antialiased', fontFamily: "'Inter', sans-serif", color: 'var(--nb-text)' }}>

      {/* Fixed Header */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ borderBottom: '1px solid var(--nb-border)', backgroundColor: 'var(--nb-bg)' }}>
        <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors -ml-1.5">
          <ArrowLeft size={20} color="var(--nb-text)" />
        </button>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--nb-muted)' }}>Neighborhood Brief</span>
        <button className="p-1.5 rounded-full hover:bg-black/5 transition-colors -mr-1.5">
          <Share size={18} color="var(--nb-text)" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">

        {/* Title Area */}
        <div className="px-6 pt-5 pb-4 stagger-in stagger-1">
          <h1
            className="font-playfair text-[34px] leading-tight mb-2"
            style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
          >
            30318 · West Midtown, Atlanta
          </h1>
          <p className="text-xs mb-3" style={{ color: 'var(--nb-muted)' }}>
            Generated May 3, 2026 · For Sarah Chen, Keller Williams
          </p>
          <div className="inline-flex items-center px-2.5 py-1 rounded-md" style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}>
            <span className="text-[10px] font-bold uppercase tracking-wider">Ready to share</span>
          </div>
        </div>

        <div className="px-4 pb-6 flex flex-col gap-3">

          {/* Schools */}
          <div className="p-5 rounded-xl shadow-sm stagger-in stagger-2" style={{ backgroundColor: 'var(--nb-surface)' }}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} color="var(--nb-accent)" />
              <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Schools</h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { level: 'Elementary', name: 'Hollis Innovation Academy', score: 7 },
                { level: 'Middle', name: 'Inman Middle School', score: 8 },
                { level: 'High', name: 'Grady High School', score: 6 },
              ].map((school, i) => (
                <div key={i} className="flex justify-between items-center gap-3">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px]" style={{ color: 'var(--nb-muted)' }}>{school.level}</span>
                    <span className="text-sm font-medium truncate">{school.name}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-14 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--nb-border)' }}>
                      <div className="h-full rounded-full" style={{ width: `${school.score * 10}%`, backgroundColor: 'var(--nb-accent)' }} />
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
              <UtensilsCrossed size={16} color="var(--nb-text)" />
              <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Top Dining</h2>
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
                    <span className="text-sm font-bold tabular-nums" style={{ color: 'var(--nb-accent)' }}>{rest.score}★</span>
                    <span className="text-xs w-20 text-right" style={{ color: 'var(--nb-muted)' }}>{rest.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Walkability */}
          <div className="p-5 rounded-xl shadow-sm stagger-in stagger-4" style={{ backgroundColor: 'var(--nb-surface)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Footprints size={16} color="var(--nb-text)" />
              <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Walkability</h2>
            </div>
            <div className="flex justify-around px-2">
              {[
                { label: 'Walk', score: 82, color: '#059669' },
                { label: 'Transit', score: 54, color: 'var(--nb-accent)' },
                { label: 'Bike', score: 71, color: '#2563EB' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border-[3px]"
                    style={{ borderColor: item.color }}
                  >
                    <span className="font-playfair text-lg font-bold tabular-nums">{item.score}</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Snapshot */}
          <div className="p-5 rounded-xl shadow-sm stagger-in stagger-4" style={{ backgroundColor: 'var(--nb-surface)' }}>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={16} color="var(--nb-text)" />
              <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Market Snapshot</h2>
            </div>
            <div className="flex flex-col gap-0">
              <div className="flex justify-between items-center py-2.5 border-b" style={{ borderColor: 'var(--nb-border)' }}>
                <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>Median Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tabular-nums">$485,000</span>
                  <span className="text-[11px] font-bold" style={{ color: 'var(--nb-success)' }}>+4.2% YoY</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b" style={{ borderColor: 'var(--nb-border)' }}>
                <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>Avg Days on Market</span>
                <span className="text-sm font-bold tabular-nums">28 days</span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>List-to-Sale Ratio</span>
                <span className="text-sm font-bold tabular-nums" style={{ color: 'var(--nb-success)' }}>101.4%</span>
              </div>
            </div>
          </div>

          {/* What Residents Say */}
          <div className="p-5 rounded-xl shadow-sm stagger-in stagger-5" style={{ backgroundColor: 'var(--nb-surface)' }}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} color="var(--nb-text)" />
                <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>What Residents Say</h2>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 rounded-md" style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}>
                <span className="text-[9px] font-bold uppercase tracking-wider">Reddit</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="p-3 rounded-lg border text-sm italic leading-relaxed" style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}>
                "Best food scene in Atlanta. Parking is a nightmare since the new condos."
                <div className="flex justify-between items-center mt-2 not-italic text-xs font-medium">
                  <span style={{ color: 'var(--nb-accent)' }}>r/Atlanta</span>
                  <span style={{ color: 'var(--nb-muted)' }}>234 upvotes · 12d ago</span>
                </div>
              </div>
              <div className="p-3 rounded-lg border text-sm italic leading-relaxed" style={{ backgroundColor: 'var(--nb-bg)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}>
                "Great for young professionals. Not as family-friendly as Decatur."
                <div className="flex justify-between items-center mt-2 not-italic text-xs font-medium">
                  <span style={{ color: 'var(--nb-accent)' }}>r/AtlantaHousing</span>
                  <span style={{ color: 'var(--nb-muted)' }}>89 upvotes</span>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-md" style={{ backgroundColor: 'var(--nb-accent-light)' }}>
                <AlertTriangle size={13} color="var(--nb-accent)" className="shrink-0 mt-0.5" />
                <span className="text-xs font-medium leading-snug" style={{ color: 'var(--nb-text)' }}>3 threads mention construction noise on Howell Mill</span>
              </div>
            </div>
          </div>

          {/* Crime & Safety */}
          <div className="p-5 rounded-xl shadow-sm stagger-in stagger-6" style={{ backgroundColor: 'var(--nb-surface)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Shield size={16} color="var(--nb-text)" />
              <h2 className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Crime & Safety</h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--nb-muted)', maxWidth: '60%' }}>Crime rate 18% below city average. Violent crime: Low.</p>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--nb-success)' }} />
                  <div className="w-5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--nb-border)' }} />
                  <div className="w-5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--nb-border)' }} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'var(--nb-success)' }}>Low</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Always-visible Footer — outside the scroll area */}
      <div className="shrink-0 px-4 py-3 border-t" style={{ borderColor: 'var(--nb-border)', backgroundColor: 'var(--nb-bg)' }}>
        <button
          className="w-full h-12 rounded-xl font-semibold text-white shadow-sm transition-transform active:scale-[0.98]"
          style={{ backgroundColor: 'var(--nb-accent)' }}
        >
          Email this report
        </button>
      </div>

    </div>
  );
}
