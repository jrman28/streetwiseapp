import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import './_group.css';

export function Login() {
  return (
    <div className="nb-container flex flex-col p-6 w-full max-w-md mx-auto">
      {/* Top */}
      <div className="flex items-center justify-center gap-2 mt-12 stagger-in stagger-1">
        <MapPin size={16} color="var(--nb-muted)" />
        <span className="font-playfair text-2xl font-bold" style={{ color: 'var(--nb-text)' }}>Streetwise</span>
      </div>

      {/* Headline */}
      <h1 
        className="font-playfair text-4xl leading-tight text-center mt-14 stagger-in stagger-2" 
        style={{ color: 'var(--nb-text)' }}
      >
        Know every neighborhood.
      </h1>
      <p className="text-base text-center mt-3 stagger-in stagger-2" style={{ color: 'var(--nb-muted)' }}>
        Sign in to generate your first report.
      </p>

      {/* Google Button */}
      <button 
        className="flex items-center justify-center gap-3 h-14 w-full rounded-xl shadow-sm mt-10 transition-transform hover:scale-[1.02] active:scale-[0.98] stagger-in stagger-3"
        style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="font-medium" style={{ color: 'var(--nb-text)' }}>Continue with Google</span>
      </button>

      {/* Apple Button */}
      <button 
        className="flex items-center justify-center gap-3 h-14 w-full rounded-xl shadow-sm mt-3 transition-transform hover:scale-[1.02] active:scale-[0.98] stagger-in stagger-3"
        style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.598 8.016c-.035-2.617 2.146-3.896 2.232-3.948-1.218-1.782-3.12-2.016-3.805-2.05-1.627-.164-3.17.958-3.998.958-.83 0-2.097-.936-3.453-.91-1.764.025-3.393.968-4.305 2.55-1.848 3.208-.472 7.957 1.332 10.567.884 1.282 1.935 2.73 3.3 2.68 1.314-.052 1.815-.845 3.39-.845 1.572 0 2.025.845 3.413.818 1.414-.025 2.316-1.306 3.195-2.593 1.018-1.488 1.44-2.932 1.464-3.007-.033-.014-2.734-1.047-2.765-4.22zm-2.457-5.592c.723-.878 1.21-2.096 1.077-3.313-1.05.042-2.312.698-3.056 1.595-.595.714-1.18 1.96-1.03 3.16 1.173.091 2.308-.553 3.009-1.442z" fill="black"/>
        </svg>
        <span className="font-medium" style={{ color: 'var(--nb-text)' }}>Continue with Apple</span>
      </button>

      {/* OR Divider */}
      <div className="flex items-center gap-4 mt-6 stagger-in stagger-4">
        <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--nb-border)' }}></div>
        <span className="text-sm font-medium" style={{ color: 'var(--nb-muted)' }}>or</span>
        <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--nb-border)' }}></div>
      </div>

      {/* Email Input */}
      <div className="relative mt-4 stagger-in stagger-5">
        <input 
          type="email" 
          placeholder="Enter your work email" 
          className="w-full h-14 pl-4 pr-14 rounded-xl text-base focus:outline-none focus:ring-1 transition-all"
          style={{ backgroundColor: 'var(--nb-surface)', color: 'var(--nb-text)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <Mail size={20} color="var(--nb-muted)" />
        </div>
      </div>

      {/* Magic Link Button */}
      <button 
        className="h-14 w-full rounded-xl font-semibold mt-3 transition-transform hover:scale-[1.02] active:scale-[0.98] stagger-in stagger-5"
        style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}
      >
        Send magic link →
      </button>

      {/* Terms Text */}
      <p className="text-[10px] text-center mt-8 px-4 stagger-in stagger-6" style={{ color: 'var(--nb-muted)' }}>
        By continuing, you agree to our Terms and Privacy Policy.
      </p>

      {/* Footer */}
      <div className="text-center mt-auto pb-6 stagger-in stagger-6">
        <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>New to Streetwise? </span>
        <a href="#" className="text-sm font-medium hover:underline" style={{ color: 'var(--nb-accent)' }}>Join the waitlist</a>
      </div>
    </div>
  );
}
