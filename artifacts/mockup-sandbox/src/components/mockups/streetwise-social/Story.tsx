import { Check } from 'lucide-react';
import '../neighborhood-flow/_group.css';

export function Story() {
  return (
    <div className="w-[270px] h-[480px] relative overflow-hidden bg-[var(--nb-bg)] nb-container p-0 m-0 flex-shrink-0">
      <div className="absolute top-[20px] left-[50%] -translate-x-1/2 text-[9px] tracking-[0.18em] text-[var(--nb-muted)] font-medium whitespace-nowrap">
        STREETWISE
      </div>

      <div className="absolute top-[60px] left-0 right-0 px-[24px]">
        <h1 className="font-playfair text-[28px] leading-[1.15] text-[var(--nb-text)] text-center m-0">
          What's the<br />neighborhood<br />actually like?
        </h1>
      </div>

      <div className="absolute top-[220px] left-[24px] right-[24px] flex flex-col gap-[8px]">
        <div className="bg-white rounded-xl px-[12px] py-[8px] shadow-sm flex items-center gap-[8px]">
          <Check className="w-[14px] h-[14px] text-[var(--nb-accent)] flex-shrink-0" strokeWidth={3} />
          <span className="text-[12px] font-medium text-[var(--nb-text)] truncate">Schools · 7/10</span>
        </div>
        
        <div className="bg-white rounded-xl px-[12px] py-[8px] shadow-sm flex items-center gap-[8px]">
          <Check className="w-[14px] h-[14px] text-[var(--nb-accent)] flex-shrink-0" strokeWidth={3} />
          <span className="text-[12px] font-medium text-[var(--nb-text)] truncate">Walk score · 82</span>
        </div>
        
        <div className="bg-white rounded-xl px-[12px] py-[8px] shadow-sm flex items-center gap-[8px]">
          <Check className="w-[14px] h-[14px] text-[var(--nb-accent)] flex-shrink-0" strokeWidth={3} />
          <span className="text-[12px] font-medium text-[var(--nb-text)] truncate">Dining · 4.7★</span>
        </div>
        
        <div className="bg-white rounded-xl px-[12px] py-[8px] shadow-sm flex items-center gap-[8px]">
          <div className="w-[14px] h-[14px] flex items-center justify-center flex-shrink-0">
            <div className="w-[6px] h-[6px] rounded-full bg-[var(--nb-muted)] animate-pulse-dot" />
          </div>
          <span className="text-[12px] text-[var(--nb-muted)] truncate">Reddit...</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-[var(--nb-accent)] flex flex-col items-center justify-center">
        <div className="font-playfair text-[16px] text-white font-bold">
          getstreetwise.com
        </div>
        <div className="text-[10px] text-white/70 mt-[4px] uppercase tracking-wider font-medium">
          swipe up ↑
        </div>
      </div>
    </div>
  );
}
