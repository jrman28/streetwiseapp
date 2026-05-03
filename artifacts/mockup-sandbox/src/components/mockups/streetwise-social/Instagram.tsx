import '../neighborhood-flow/_group.css';

export function Instagram() {
  return (
    <div className="w-[540px] h-[540px] relative overflow-hidden bg-[var(--nb-bg)] nb-container p-0 m-0 flex-shrink-0">
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'linear-gradient(160deg, rgba(255,253,249,0.8), transparent)' }} 
      />
      
      <div className="absolute top-[24px] left-[24px] text-[10px] tracking-[0.2em] font-medium text-[var(--nb-muted)]">
        STREETWISE
      </div>

      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] flex flex-col items-center">
        <h1 className="font-playfair text-[56px] leading-[1.05] text-[var(--nb-text)] text-center m-0">
          Know every<br />neighborhood.
        </h1>
        <div className="mt-[16px] h-[3px] w-[48px] rounded bg-[var(--nb-accent)]" />
        
        <div className="mt-[12px] flex flex-wrap justify-center gap-[8px]">
          <span className="rounded-full border border-[var(--nb-border)] bg-white text-[11px] font-medium px-[12px] py-[6px] text-[var(--nb-text)] shadow-sm">
            📚 Schools
          </span>
          <span className="rounded-full border border-[var(--nb-border)] bg-white text-[11px] font-medium px-[12px] py-[6px] text-[var(--nb-text)] shadow-sm">
            🍽 Dining
          </span>
          <span className="rounded-full border border-[var(--nb-border)] bg-white text-[11px] font-medium px-[12px] py-[6px] text-[var(--nb-text)] shadow-sm">
            🗺 Walkability
          </span>
        </div>
      </div>

      <div className="absolute bottom-[32px] left-[24px] right-[24px] bg-white rounded-xl shadow-md p-[16px]">
        <div className="font-semibold text-[14px] text-[var(--nb-text)] mb-[12px]">
          30318 · West Midtown, ATL
        </div>
        
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] text-[var(--nb-muted)] leading-none">Schools</span>
            <div className="h-[12px] w-full bg-[#E3E2DE] rounded overflow-hidden">
              <div className="h-full bg-[var(--nb-accent)] w-[70%]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] text-[var(--nb-muted)] leading-none">Walkability</span>
            <div className="h-[12px] w-full bg-[#E3E2DE] rounded overflow-hidden">
              <div className="h-full bg-[var(--nb-accent)] w-[82%]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] text-[var(--nb-muted)] leading-none">Sentiment</span>
            <div className="h-[12px] w-full bg-[#E3E2DE] rounded overflow-hidden">
              <div className="h-full bg-[var(--nb-accent)] w-[78%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[16px] right-[24px] text-[10px] text-[var(--nb-muted)]">
        getstreetwise.com
      </div>
    </div>
  );
}
