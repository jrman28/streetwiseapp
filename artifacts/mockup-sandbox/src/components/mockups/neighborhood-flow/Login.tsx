import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import './_group.css';

export function Login() {
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
      {/* Scrollable center content */}
      <div className="flex-1 flex flex-col px-6 overflow-y-auto">

        {/* Wordmark */}
        <div className="flex items-center justify-center gap-1.5 mt-14 mb-14 stagger-in stagger-1">
          <MapPin size={15} strokeWidth={2.5} color="var(--nb-accent)" />
          <span className="font-playfair text-2xl font-bold leading-none" style={{ color: 'var(--nb-text)' }}>
            Streetwise
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-playfair text-[36px] leading-tight text-center mb-3 stagger-in stagger-2"
          style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
        >
          Know every neighborhood.
        </h1>
        <p
          className="text-sm text-center mb-10 stagger-in stagger-2"
          style={{ color: 'var(--nb-muted)', textWrap: 'pretty' }}
        >
          Sign in to generate your first report.
        </p>

        {/* OAuth buttons — hit area h-14 = 56px ≥ 40px ✓ */}
        <div className="flex flex-col gap-3 stagger-in stagger-3">
          {/* Google */}
          <button
            className="flex items-center justify-center gap-3 w-full font-medium transition-[transform,box-shadow] duration-150 active:scale-[0.96]"
            style={{
              height: 52,
              borderRadius: 14,
              backgroundColor: 'var(--nb-surface)',
              border: '1px solid var(--nb-border)',
              color: 'var(--nb-text)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Apple */}
          <button
            className="flex items-center justify-center gap-3 w-full font-medium transition-[transform,box-shadow] duration-150 active:scale-[0.96]"
            style={{
              height: 52,
              borderRadius: 14,
              backgroundColor: 'var(--nb-surface)',
              border: '1px solid var(--nb-border)',
              color: 'var(--nb-text)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M16.598 8.016c-.035-2.617 2.146-3.896 2.232-3.948-1.218-1.782-3.12-2.016-3.805-2.05-1.627-.164-3.17.958-3.998.958-.83 0-2.097-.936-3.453-.91-1.764.025-3.393.968-4.305 2.55-1.848 3.208-.472 7.957 1.332 10.567.884 1.282 1.935 2.73 3.3 2.68 1.314-.052 1.815-.845 3.39-.845 1.572 0 2.025.845 3.413.818 1.414-.025 2.316-1.306 3.195-2.593 1.018-1.488 1.44-2.932 1.464-3.007-.033-.014-2.734-1.047-2.765-4.22zm-2.457-5.592c.723-.878 1.21-2.096 1.077-3.313-1.05.042-2.312.698-3.056 1.595-.595.714-1.18 1.96-1.03 3.16 1.173.091 2.308-.553 3.009-1.442z" fill="black"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6 stagger-in stagger-4">
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--nb-border)' }} />
          <span className="text-xs font-medium" style={{ color: 'var(--nb-muted)' }}>or</span>
          <div className="flex-1 h-px" style={{ backgroundColor: 'var(--nb-border)' }} />
        </div>

        {/* Email input — concentric: rounded-[14px] outer, nothing nested */}
        <div className="relative stagger-in stagger-5">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full pl-4 pr-12 text-sm focus:outline-none"
            style={{
              height: 52,
              borderRadius: 14,
              backgroundColor: 'var(--nb-surface)',
              color: 'var(--nb-text)',
              border: '1px solid var(--nb-border)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.06)',
              transition: 'box-shadow 0.15s ease',
            }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <Mail size={17} color="var(--nb-muted)" />
          </div>
        </div>

        {/* Magic link CTA — button press: scale(0.96) */}
        <button
          className="w-full font-semibold text-white transition-[transform,opacity] duration-150 active:scale-[0.96] mt-3 stagger-in stagger-5"
          style={{
            height: 52,
            borderRadius: 14,
            backgroundColor: 'var(--nb-accent)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 16px rgba(217,119,6,0.28)',
          }}
        >
          Send magic link →
        </button>

        <p
          className="text-[10px] text-center mt-8 stagger-in stagger-6"
          style={{ color: 'var(--nb-muted)', textWrap: 'pretty' }}
        >
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>

      {/* Footer — pinned outside scroll */}
      <div className="shrink-0 py-5 text-center stagger-in stagger-6">
        <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>New to Streetwise? </span>
        <a href="#" className="text-sm font-semibold" style={{ color: 'var(--nb-accent)' }}>
          Join the waitlist
        </a>
      </div>
    </div>
  );
}
