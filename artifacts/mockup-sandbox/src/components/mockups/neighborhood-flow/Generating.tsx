import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, Footprints, Home, Shield, MessageCircle, Check } from 'lucide-react';
import './_group.css';

const sources = [
  { icon: <BookOpen size={16} />, label: 'GreatSchools', detail: 'School ratings', status: 'done' },
  { icon: <UtensilsCrossed size={16} />, label: 'Yelp', detail: 'Top dining', status: 'done' },
  { icon: <MessageCircle size={16} />, label: 'Reddit', detail: 'Community sentiment', status: 'scanning' },
  { icon: <Home size={16} />, label: 'MLS', detail: 'Market snapshot', status: 'scanning' },
  { icon: <Footprints size={16} />, label: 'Walk Score', detail: 'Walkability', status: 'queued' },
  { icon: <Shield size={16} />, label: 'Crime Data', detail: 'Safety index', status: 'queued' },
];

export function Generating() {
  return (
    <div
      className="flex flex-col p-6 w-full animate-subtle-pulse-bg"
      style={{
        minHeight: '100dvh',
        backgroundColor: 'var(--nb-bg)',
        WebkitFontSmoothing: 'antialiased',
        fontFamily: "'Inter', sans-serif",
        color: 'var(--nb-text)',
      }}
    >
      {/* Wordmark */}
      <div className="flex items-center gap-1.5 mb-8">
        <MapPin size={14} strokeWidth={2.5} color="var(--nb-accent)" />
        <span className="font-playfair text-lg font-bold leading-none" style={{ color: 'var(--nb-text)' }}>Streetwise</span>
      </div>

      {/* Zip badge */}
      <div
        className="inline-flex items-center self-start px-3 py-1 mb-6 stagger-in stagger-1"
        style={{
          backgroundColor: 'var(--nb-accent-light)',
          color: 'var(--nb-accent)',
          borderRadius: 99,
          fontVariantNumeric: 'tabular-nums',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        30318 · West Midtown, Atlanta, GA
      </div>

      <h1
        className="font-playfair text-[32px] leading-tight mb-2 stagger-in stagger-2"
        style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
      >
        Building your report…
      </h1>

      <p
        className="text-sm mb-8 stagger-in stagger-2"
        style={{ color: 'var(--nb-muted)', textWrap: 'pretty' }}
      >
        Scanning {sources.length} sources in real time
      </p>

      {/* Source rows */}
      <div className="flex flex-col gap-2.5 mb-10 stagger-in stagger-3">
        {sources.map(({ icon, label, detail, status }) => (
          <div
            key={label}
            className="flex items-center justify-between px-4 py-3.5 rounded-xl"
            style={{
              backgroundColor: 'var(--nb-surface)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.05)',
              opacity: status === 'queued' ? 0.55 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            <div className="flex items-center gap-3">
              {/* Hit area: min 40px via padding — icon container is 24px + surrounding flex */}
              <span style={{ color: 'var(--nb-muted)', display: 'flex', minWidth: 20 }}>{icon}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-tight">{label}</span>
                <span className="text-[11px] leading-tight" style={{ color: 'var(--nb-muted)' }}>{detail}</span>
              </div>
            </div>

            {/* Status indicator */}
            {status === 'done' && (
              <div className="flex items-center gap-1.5">
                {/* Icon transition: opacity + scale per principle #6 */}
                <Check
                  size={14}
                  style={{
                    color: 'var(--nb-success)',
                    opacity: 1,
                    transform: 'scale(1)',
                    filter: 'blur(0px)',
                    transition: 'opacity 0.2s, transform 0.2s, filter 0.2s',
                  }}
                />
                <span className="text-xs font-semibold" style={{ color: 'var(--nb-success)' }}>Done</span>
              </div>
            )}
            {status === 'scanning' && (
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: 'var(--nb-accent)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--nb-accent)' }}>Scanning…</span>
              </div>
            )}
            {status === 'queued' && (
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--nb-border)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>Queued</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-auto pb-8 stagger-in stagger-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>Est. 45 seconds remaining</span>
          <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--nb-text)', fontVariantNumeric: 'tabular-nums' }}>65%</span>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--nb-border)' }}>
          <div className="h-full rounded-full animate-progress-fill" style={{ backgroundColor: 'var(--nb-accent)' }} />
        </div>
      </div>
    </div>
  );
}
