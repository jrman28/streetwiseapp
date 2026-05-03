import '../neighborhood-flow/_group.css';

export function LinkedIn() {
  return (
    <div className="w-[600px] h-[315px] relative overflow-hidden bg-[var(--nb-bg)] nb-container p-0 m-0 flex-shrink-0">
      <div className="absolute left-[36px] top-[50%] -translate-y-1/2 w-[280px]">
        <div className="inline-flex border border-[var(--nb-border)] rounded-full text-[10px] font-medium px-[12px] py-[4px] text-[var(--nb-muted)]">
          For Real Estate Agents
        </div>
        
        <h2 className="font-playfair text-[32px] leading-[1.15] text-[var(--nb-text)] mt-[12px] m-0">
          Your clients deserve to know the neighborhood.
        </h2>
        
        <p className="text-[12px] text-[var(--nb-muted)] mt-[8px] leading-relaxed m-0">
          AI-powered briefs in 60 seconds. Schools, walkability, dining, sentiment.
        </p>
        
        <div className="mt-[16px] flex gap-[16px]">
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[11px] text-[var(--nb-text)]">2,400+</span>
            <span className="text-[10px] text-[var(--nb-muted)]">agents</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[11px] text-[var(--nb-text)]">38</span>
            <span className="text-[10px] text-[var(--nb-muted)]">states</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-[11px] text-[var(--nb-text)]">&lt;60s</span>
            <span className="text-[10px] text-[var(--nb-muted)]">avg time</span>
          </div>
        </div>
      </div>

      <div className="absolute right-[24px] top-[50%] -translate-y-1/2 w-[220px] h-[140px] relative">
        <div className="absolute top-[32px] left-0 right-0 bg-white rounded-xl shadow-sm p-[12px] opacity-[0.65] scale-[0.94] origin-top transform">
          <div className="font-bold text-[14px] text-[var(--nb-text)] leading-none">10001</div>
          <div className="h-[4px] bg-[var(--nb-border)] rounded w-full mt-[6px] overflow-hidden">
            <div className="h-full bg-[var(--nb-accent)] w-[60%]" />
          </div>
        </div>
        
        <div className="absolute top-[16px] left-0 right-0 bg-white rounded-xl shadow-sm p-[12px] opacity-[0.85] scale-[0.97] origin-top transform">
          <div className="font-bold text-[14px] text-[var(--nb-text)] leading-none">90210</div>
          <div className="h-[4px] bg-[var(--nb-border)] rounded w-full mt-[6px] overflow-hidden">
            <div className="h-full bg-[var(--nb-accent)] w-[85%]" />
          </div>
        </div>
        
        <div className="absolute top-0 left-0 right-0 bg-white rounded-xl shadow-sm p-[12px] opacity-100 scale-100 origin-top transform">
          <div className="font-bold text-[14px] text-[var(--nb-text)] leading-none">30318</div>
          <div className="h-[4px] bg-[var(--nb-border)] rounded w-full mt-[6px] overflow-hidden">
            <div className="h-full bg-[var(--nb-accent)] w-[70%]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[20px] right-[24px] bg-[var(--nb-accent-light)] text-[var(--nb-accent)] text-[10px] px-[10px] py-[4px] rounded-full font-medium">
        getstreetwise.com
      </div>
    </div>
  );
}
