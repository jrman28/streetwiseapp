import '../neighborhood-flow/_group.css';

export function TwitterCard() {
  return (
    <div className="w-[600px] h-[315px] relative overflow-hidden bg-[#1A1917] nb-container p-0 m-0 flex-shrink-0" style={{ backgroundColor: '#1A1917' }}>
      <div className="absolute top-[24px] right-[24px] text-[10px] tracking-[0.2em] text-[#D97706] font-medium">
        STREETWISE
      </div>

      <div className="absolute left-[32px] top-[50%] -translate-y-1/2 w-[270px]">
        <h1 className="font-playfair text-[40px] leading-[1.1] text-white m-0">
          One zip code.<br />Every answer.
        </h1>
        <p className="mt-[12px] text-[13px] text-[#787774] leading-snug">
          Schools, dining, walkability,<br />Reddit sentiment — in 60 seconds.
        </p>
        <div className="mt-[16px] inline-flex items-center bg-[#D97706] text-white text-[11px] font-medium px-[14px] py-[6px] rounded-full">
          Free 14-day trial →
        </div>
      </div>

      <div className="absolute right-[24px] top-[50%] -translate-y-1/2 bg-white rounded-xl p-[16px] shadow-lg w-[200px] rotate-[3deg] origin-center">
        <div className="font-playfair font-bold text-[18px] text-[var(--nb-text)] leading-none">
          30318
        </div>
        <div className="text-[10px] text-[var(--nb-muted)] mt-[8px]">
          West Midtown · Atlanta
        </div>
        
        <div className="mt-[12px] flex flex-col gap-[8px]">
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] font-medium text-[var(--nb-muted)] leading-none">Schools</span>
            <div className="h-[6px] w-full bg-[var(--nb-border)] rounded overflow-hidden">
              <div className="h-full bg-[#D97706] w-[70%]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] font-medium text-[var(--nb-muted)] leading-none">Walkability</span>
            <div className="h-[6px] w-full bg-[var(--nb-border)] rounded overflow-hidden">
              <div className="h-full bg-[#D97706] w-[82%]" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[4px]">
            <span className="text-[10px] font-medium text-[var(--nb-muted)] leading-none">Sentiment</span>
            <div className="h-[6px] w-full bg-[var(--nb-border)] rounded overflow-hidden">
              <div className="h-full bg-[#D97706] w-[78%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
