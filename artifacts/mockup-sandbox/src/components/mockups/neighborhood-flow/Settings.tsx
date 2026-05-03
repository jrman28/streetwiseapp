import React from 'react';
import { ArrowLeft, Camera, ChevronRight, X } from 'lucide-react';
import './_group.css';

export function Settings() {
  return (
    <div className="nb-container flex flex-col p-6 w-full max-w-md mx-auto overflow-y-auto pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 stagger-in stagger-1">
        <button className="p-2 -ml-2 rounded-full hover:bg-black/5 transition-colors">
          <ArrowLeft size={20} color="var(--nb-text)" />
        </button>
        <span className="font-semibold" style={{ color: 'var(--nb-text)' }}>Settings</span>
        <button className="font-medium px-2 py-1" style={{ color: 'var(--nb-accent)' }}>Save</button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-4 mb-8 pb-8 border-b stagger-in stagger-1" style={{ borderColor: 'var(--nb-border)' }}>
        <h2 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--nb-muted)' }}>Profile</h2>
        
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold" style={{ backgroundColor: 'var(--nb-accent)', color: 'white' }}>
            SC
          </div>
        </div>

        <input 
          type="text" 
          defaultValue="Sarah Chen"
          className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all"
          style={{ backgroundColor: 'var(--nb-surface)', color: 'var(--nb-text)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
        />
        <input 
          type="email" 
          defaultValue="sarah@kellerwilliams.com"
          className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all"
          style={{ backgroundColor: 'var(--nb-surface)', color: 'var(--nb-text)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
        />
        <input 
          type="tel" 
          placeholder="Phone number (optional)"
          className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all"
          style={{ backgroundColor: 'var(--nb-surface)', color: 'var(--nb-text)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
        />
      </div>

      {/* Report Branding */}
      <div className="flex flex-col gap-4 mb-8 pb-8 border-b stagger-in stagger-2" style={{ borderColor: 'var(--nb-border)' }}>
        <h2 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--nb-muted)' }}>Report Branding</h2>
        
        <input 
          type="text" 
          defaultValue="Sarah Chen · Keller Williams"
          className="w-full h-12 px-4 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all"
          style={{ backgroundColor: 'var(--nb-surface)', color: 'var(--nb-text)', borderColor: 'var(--nb-border)', borderWidth: 1 }}
        />
        
        <div className="flex items-center justify-between p-4 rounded-xl border" style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)' }}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--nb-bg)' }}>
              <Camera size={16} color="var(--nb-muted)" />
            </div>
            <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>No logo added</span>
          </div>
          <button className="text-sm font-medium px-3 py-1.5 rounded-lg transition-colors" style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}>
            Upload
          </button>
        </div>

        <div className="p-4 rounded-xl border flex justify-center items-center mt-2" style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)' }}>
          <span className="text-[10px] font-bold tracking-tight" style={{ color: 'var(--nb-muted)' }}>NEIGHBORHOOD BRIEF · Prepared by Sarah Chen · Keller Williams</span>
        </div>
      </div>

      {/* Delivery */}
      <div className="flex flex-col gap-4 mb-8 pb-8 border-b stagger-in stagger-3" style={{ borderColor: 'var(--nb-border)' }}>
        <h2 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--nb-muted)' }}>Delivery</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'var(--nb-text)' }}>Send by email</span>
          <div className="w-11 h-6 rounded-full flex items-center px-0.5 transition-colors" style={{ backgroundColor: 'var(--nb-accent)' }}>
            <div className="w-5 h-5 rounded-full bg-white shadow-sm transform translate-x-5 transition-transform" />
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>+ Add CC address</span>
        </div>
      </div>

      {/* Saved Markets */}
      <div className="flex flex-col gap-4 mb-8 pb-8 border-b stagger-in stagger-4" style={{ borderColor: 'var(--nb-border)' }}>
        <h2 className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--nb-muted)' }}>Saved Markets</h2>
        
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm" style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}>
            <span>30318 · West Midtown, ATL</span>
            <button className="p-0.5 rounded-full hover:bg-black/5">
              <X size={14} color="var(--nb-muted)" />
            </button>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm" style={{ backgroundColor: 'var(--nb-surface)', borderColor: 'var(--nb-border)', color: 'var(--nb-text)' }}>
            <span>90210 · Beverly Hills, CA</span>
            <button className="p-0.5 rounded-full hover:bg-black/5">
              <X size={14} color="var(--nb-muted)" />
            </button>
          </div>
        </div>
        
        <button className="text-sm font-medium text-left mt-2" style={{ color: 'var(--nb-accent)' }}>
          + Add market
        </button>
      </div>

      {/* Subscription */}
      <div className="flex flex-col gap-0 stagger-in stagger-4">
        <h2 className="text-xs uppercase tracking-wider font-semibold mb-4" style={{ color: 'var(--nb-muted)' }}>Subscription</h2>
        
        <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--nb-border)' }}>
          <span className="text-sm font-medium" style={{ color: 'var(--nb-text)' }}>Current plan</span>
          <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ backgroundColor: 'var(--nb-accent-light)', color: 'var(--nb-accent)' }}>Pro · $29/mo</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--nb-border)' }}>
          <span className="text-sm font-medium" style={{ color: 'var(--nb-text)' }}>Next billing</span>
          <span className="text-sm" style={{ color: 'var(--nb-muted)' }}>Jun 3, 2026</span>
        </div>
        
        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium" style={{ color: 'var(--nb-text)' }}>Manage billing</span>
          <ChevronRight size={16} color="var(--nb-muted)" />
        </div>
      </div>
    </div>
  );
}
