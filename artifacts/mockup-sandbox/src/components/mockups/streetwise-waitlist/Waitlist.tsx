import React from 'react';
import { MapPin, BookOpen, UtensilsCrossed, Footprints, MessageCircle, ArrowRight } from 'lucide-react';
import '../neighborhood-flow/_group.css';

export function Waitlist() {
  return (
    <div className="nb-container w-full min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* TOP NAV */}
        <nav 
          className="flex justify-between items-center px-16 py-6 border-b"
          style={{ borderColor: 'var(--nb-border)' }}
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} color="var(--nb-muted)" />
            <span className="font-playfair font-bold text-xl" style={{ color: 'var(--nb-text)' }}>
              Streetwise
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-6 font-medium cursor-pointer hover:opacity-80 transition-opacity" style={{ color: 'var(--nb-muted)' }}>
              Sign in
            </span>
            <button 
              className="px-5 py-2 rounded-full font-medium text-sm flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}
            >
              Join waitlist <ArrowRight size={16} />
            </button>
          </div>
        </nav>

        {/* HERO SECTION */}
        <main className="text-center px-16 pt-20 pb-16 flex-1 flex flex-col justify-center">
          <div 
            className="inline-flex items-center mx-auto mb-6 px-4 py-1.5 rounded-full text-xs font-medium stagger-in stagger-1"
            style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}
          >
            ✦ AI-powered neighborhood intelligence
          </div>

          <h1 
            className="font-playfair text-6xl leading-tight max-w-4xl mx-auto stagger-in stagger-2"
            style={{ color: 'var(--nb-text)', textWrap: 'balance' }}
          >
            Know the neighborhood<br />before your client asks.
          </h1>

          <p 
            className="text-xl max-w-2xl mx-auto mt-6 leading-relaxed stagger-in stagger-3"
            style={{ color: 'var(--nb-muted)', textWrap: 'balance' }}
          >
            Streetwise generates a one-page PDF briefing — schools, dining, walkability, Reddit sentiment, and market data — in under 60 seconds. Impress every client, every time.
          </p>

          <p className="mt-4 text-sm font-medium stagger-in stagger-4" style={{ color: 'var(--nb-muted)' }}>
            Used by 2,400+ real estate agents across 38 states
          </p>

          {/* WAITLIST FORM */}
          <div className="mt-10 max-w-lg mx-auto w-full stagger-in stagger-5">
            <form 
              className="rounded-2xl shadow-md p-2 flex gap-2 items-center"
              style={{ backgroundColor: 'var(--nb-surface)' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                required
                className="flex-1 h-12 px-5 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-shadow"
                placeholder="Enter your work email"
                style={{ 
                  backgroundColor: 'var(--nb-surface)', 
                  color: 'var(--nb-text)' 
                }}
              />
              <button 
                type="submit"
                className="h-12 px-8 rounded-xl font-semibold flex-shrink-0 transition-transform hover:scale-105 active:scale-95 flex items-center gap-1.5"
                style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}
              >
                Join waitlist <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-xs mt-3 font-medium" style={{ color: 'var(--nb-muted)' }}>
              No credit card required · Free during beta
            </p>
          </div>
        </main>

        {/* FEATURES GRID */}
        <section 
          className="mt-8 px-16 pt-12 grid grid-cols-4 gap-6 border-t stagger-in stagger-6"
          style={{ borderColor: 'var(--nb-border)' }}
        >
          <div className="flex flex-col text-left">
            <BookOpen size={20} color="var(--nb-accent)" />
            <h3 className="font-semibold text-sm mt-3" style={{ color: 'var(--nb-text)' }}>School Ratings</h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--nb-muted)' }}>
              Elementary through high, GreatSchools data
            </p>
          </div>
          <div className="flex flex-col text-left">
            <UtensilsCrossed size={20} color="var(--nb-accent)" />
            <h3 className="font-semibold text-sm mt-3" style={{ color: 'var(--nb-text)' }}>Top Dining</h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--nb-muted)' }}>
              Yelp ratings and neighborhood character
            </p>
          </div>
          <div className="flex flex-col text-left">
            <Footprints size={20} color="var(--nb-accent)" />
            <h3 className="font-semibold text-sm mt-3" style={{ color: 'var(--nb-text)' }}>Walkability</h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--nb-muted)' }}>
              Walk, transit, and bike scores at a glance
            </p>
          </div>
          <div className="flex flex-col text-left">
            <MessageCircle size={20} color="var(--nb-accent)" />
            <h3 className="font-semibold text-sm mt-3" style={{ color: 'var(--nb-text)' }}>Community Voice</h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--nb-muted)' }}>
              Reddit sentiment, curated and summarized
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section 
          className="mt-12 mx-16 p-8 rounded-2xl grid grid-cols-3 divide-x shadow-sm stagger-in stagger-6"
          style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)' }}
        >
          <div className="text-center" style={{ borderColor: 'var(--nb-border)' }}>
            <div className="font-playfair text-4xl font-bold" style={{ color: 'var(--nb-text)' }}>2,400+</div>
            <div className="text-sm mt-1 font-medium" style={{ color: 'var(--nb-muted)' }}>Real estate agents</div>
          </div>
          <div className="text-center" style={{ borderColor: 'var(--nb-border)' }}>
            <div className="font-playfair text-4xl font-bold" style={{ color: 'var(--nb-text)' }}>&lt; 60s</div>
            <div className="text-sm mt-1 font-medium" style={{ color: 'var(--nb-muted)' }}>Average report time</div>
          </div>
          <div className="text-center" style={{ borderColor: 'var(--nb-border)' }}>
            <div className="font-playfair text-4xl font-bold" style={{ color: 'var(--nb-text)' }}>38</div>
            <div className="text-sm mt-1 font-medium" style={{ color: 'var(--nb-muted)' }}>States covered</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer 
          className="mt-12 mx-16 py-6 border-t flex justify-between items-center text-sm font-medium stagger-in stagger-6"
          style={{ borderColor: 'var(--nb-border)', color: 'var(--nb-muted)' }}
        >
          <span>© 2026 Streetwise · getstreetwise.com</span>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:opacity-80 transition-opacity">Privacy</span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">Terms</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
