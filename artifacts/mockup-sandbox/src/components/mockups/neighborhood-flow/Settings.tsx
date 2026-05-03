import React from 'react';
import { ArrowLeft, Camera, ChevronRight, X, Zap } from 'lucide-react';
import './_group.css';

export function Settings() {
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
      {/* Header — pinned */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0 stagger-in stagger-1"
        style={{ borderBottom: '1px solid var(--nb-border)' }}
      >
        {/* Hit area ≥ 40px */}
        <button
          className="flex items-center justify-center transition-[background-color] duration-150 rounded-full active:scale-[0.96]"
          style={{ width: 40, height: 40 }}
          aria-label="Go back"
        >
          <ArrowLeft size={20} color="var(--nb-text)" />
        </button>
        <span className="font-semibold text-sm" style={{ color: 'var(--nb-text)' }}>Settings</span>
        {/* Hit area ≥ 40px */}
        <button
          className="flex items-center justify-center font-semibold text-sm transition-[opacity] duration-150 active:scale-[0.96] rounded-lg"
          style={{ height: 40, paddingLeft: 12, paddingRight: 12, color: 'var(--nb-accent)' }}
        >
          Save
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-7">

        {/* Profile */}
        <section className="stagger-in stagger-2">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Profile</p>

          {/* Avatar — camera icon button, concentric: circle w-16 (64px), camera area inside */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div
                className="flex items-center justify-center text-lg font-bold font-playfair"
                style={{ width: 64, height: 64, borderRadius: 99, backgroundColor: 'var(--nb-accent)', color: 'white' }}
              >
                SC
              </div>
              {/* Concentric: outer circle 64px borderRadius ~32, badge offset by 4px → inner ~28px → use rounded-full */}
              <div
                className="absolute -bottom-1 -right-1 flex items-center justify-center"
                style={{
                  width: 24, height: 24, borderRadius: 99,
                  backgroundColor: 'var(--nb-surface)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.08)',
                  border: '1.5px solid var(--nb-border)',
                }}
              >
                <Camera size={11} color="var(--nb-muted)" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {[
              { type: 'text', value: 'Sarah Chen', placeholder: '' },
              { type: 'email', value: 'sarah@kellerwilliams.com', placeholder: '' },
              { type: 'tel', value: '', placeholder: 'Phone number (optional)' },
            ].map(({ type, value, placeholder }, i) => (
              <input
                key={i}
                type={type}
                defaultValue={value}
                placeholder={placeholder}
                className="w-full px-4 text-sm focus:outline-none"
                style={{
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: 'var(--nb-surface)',
                  color: 'var(--nb-text)',
                  border: '1px solid var(--nb-border)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                  transition: 'box-shadow 0.15s ease',
                }}
              />
            ))}
          </div>
        </section>

        {/* Report Branding */}
        <section className="stagger-in stagger-3">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Report Branding</p>

          <input
            type="text"
            defaultValue="Sarah Chen · Keller Williams"
            className="w-full px-4 text-sm focus:outline-none mb-3"
            style={{
              height: 48,
              borderRadius: 12,
              backgroundColor: 'var(--nb-surface)',
              color: 'var(--nb-text)',
              border: '1px solid var(--nb-border)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
              transition: 'box-shadow 0.15s ease',
            }}
          />

          {/* Logo upload row — concentric: rounded-xl (12px) card, p-4 (16px) → inner button radius = 12-12 = 0... use rounded-md (6px) since button isn't at edge */}
          <div
            className="flex items-center justify-between p-3 mb-3"
            style={{
              borderRadius: 12,
              backgroundColor: 'var(--nb-surface)',
              border: '1px solid var(--nb-border)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center"
                style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: 'var(--nb-bg)' }}
              >
                <Camera size={15} color="var(--nb-muted)" />
              </div>
              <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>No logo added</span>
            </div>
            {/* Concentric: card p-3 (12px gap from edge), outer r=12, inner r = 12-12 = 0 → use rounded-[4px] */}
            <button
              className="text-sm font-semibold transition-[transform,opacity] duration-150 active:scale-[0.96]"
              style={{
                height: 34,
                paddingLeft: 14,
                paddingRight: 14,
                borderRadius: 6,
                backgroundColor: 'var(--nb-accent-light)',
                color: 'var(--nb-accent)',
              }}
            >
              Upload
            </button>
          </div>

          {/* Preview */}
          <div
            className="flex justify-center items-center px-4"
            style={{
              height: 40,
              borderRadius: 12,
              backgroundColor: 'var(--nb-surface)',
              border: '1px solid var(--nb-border)',
            }}
          >
            <span className="text-[10px] font-bold tracking-tight" style={{ color: 'var(--nb-muted)' }}>
              NEIGHBORHOOD BRIEF · Sarah Chen · Keller Williams
            </span>
          </div>
        </section>

        {/* Delivery */}
        <section className="stagger-in stagger-3">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Delivery</p>
          <div className="flex items-center justify-between py-1">
            <span className="text-sm font-medium">Send by email</span>
            {/* Toggle — hit area via padding */}
            <button
              className="flex items-center px-0.5 transition-[background-color] duration-200"
              style={{ width: 44, height: 26, borderRadius: 99, backgroundColor: 'var(--nb-accent)' }}
              aria-label="Toggle email delivery"
            >
              <div
                className="bg-white"
                style={{
                  width: 20, height: 20, borderRadius: 99,
                  transform: 'translateX(18px)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </button>
          </div>
          <button className="text-sm font-medium mt-3" style={{ color: 'var(--nb-accent)' }}>
            + Add CC address
          </button>
        </section>

        {/* Saved Markets */}
        <section className="stagger-in stagger-4">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Saved Markets</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {['30318 · West Midtown, ATL', '90210 · Beverly Hills, CA'].map((market) => (
              <div
                key={market}
                className="flex items-center gap-1 pl-3 pr-1 border text-sm"
                style={{
                  height: 34,
                  borderRadius: 99,
                  backgroundColor: 'var(--nb-surface)',
                  borderColor: 'var(--nb-border)',
                  color: 'var(--nb-text)',
                }}
              >
                <span>{market}</span>
                {/* Hit area ≥ 40px via min-width/height on button wrapper */}
                <button
                  className="flex items-center justify-center transition-[opacity] duration-150 active:scale-[0.96]"
                  style={{ width: 30, height: 30, borderRadius: 99 }}
                  aria-label={`Remove ${market}`}
                >
                  <X size={13} color="var(--nb-muted)" />
                </button>
              </div>
            ))}
          </div>
          <button className="text-sm font-medium" style={{ color: 'var(--nb-accent)' }}>
            + Add market
          </button>
        </section>

        {/* Subscription */}
        <section className="stagger-in stagger-5">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Subscription</p>
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: '1px solid var(--nb-border)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            {[
              {
                label: 'Current plan',
                right: (
                  <span
                    className="text-xs font-semibold px-2 py-1"
                    style={{ borderRadius: 6, backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}
                  >
                    Pro · $29/mo
                  </span>
                ),
              },
              {
                label: 'Next billing',
                right: <span className="text-sm tabular-nums" style={{ color: 'var(--nb-muted)' }}>Jun 3, 2026</span>,
              },
              {
                label: 'Manage billing',
                right: <ChevronRight size={16} color="var(--nb-muted)" />,
              },
            ].map(({ label, right }, i, arr) => (
              <div
                key={label}
                className="flex items-center justify-between px-4"
                style={{
                  height: 52,
                  backgroundColor: 'var(--nb-surface)',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--nb-border)' : 'none',
                }}
              >
                <span className="text-sm font-medium">{label}</span>
                {right}
              </div>
            ))}
          </div>
        </section>

        {/* Danger zone */}
        <section className="stagger-in stagger-6 pb-2">
          <button
            className="text-sm font-medium transition-[opacity] duration-150 active:scale-[0.96]"
            style={{ color: '#DC2626' }}
          >
            Sign out
          </button>
        </section>

      </div>
    </div>
  );
}
