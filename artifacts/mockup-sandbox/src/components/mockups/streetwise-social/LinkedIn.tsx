import '../neighborhood-flow/_group.css';

export function LinkedIn() {
  const cards = [
    { zip: '10001', pct: 60, opacity: 0.6, scale: 0.93, top: 32 },
    { zip: '90210', pct: 85, opacity: 0.82, scale: 0.97, top: 16 },
    { zip: '30318', pct: 70, opacity: 1,    scale: 1,    top: 0  },
  ];

  return (
    <div
      style={{
        width: 600,
        height: 315,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--nb-bg)',
        fontFamily: "'Inter', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Left — copy */}
      <div style={{ paddingLeft: 36, width: 290, flexShrink: 0 }}>
        <div
          style={{
            display: 'inline-flex',
            border: '1px solid var(--nb-border)',
            borderRadius: 99,
            fontSize: 10,
            fontWeight: 500,
            padding: '4px 12px',
            color: 'var(--nb-muted)',
          }}
        >
          For Real Estate Agents
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 31,
            lineHeight: 1.15,
            color: 'var(--nb-text)',
            margin: '12px 0 0',
            textWrap: 'balance',
          } as React.CSSProperties}
        >
          Your clients deserve to know the neighborhood.
        </h2>

        <p
          style={{
            fontSize: 12,
            color: 'var(--nb-muted)',
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          AI-powered briefs in 60 seconds. Schools, walkability, dining, sentiment.
        </p>

        <div style={{ marginTop: 16, display: 'flex', gap: 20 }}>
          {[
            { stat: '2,400+', label: 'agents' },
            { stat: '38',     label: 'states' },
            { stat: '<60s',   label: 'avg time' },
          ].map(({ stat, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontWeight: 700, fontSize: 11, color: 'var(--nb-text)' }}>{stat}</span>
              <span style={{ fontSize: 10, color: 'var(--nb-muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — stacked report cards, no transform on container */}
      <div
        style={{
          position: 'absolute',
          right: 28,
          top: '50%',
          marginTop: -70,
          width: 210,
          height: 140,
          overflow: 'visible',
        }}
      >
        {cards.map(({ zip, pct, opacity, scale, top }) => (
          <div
            key={zip}
            style={{
              position: 'absolute',
              top,
              left: 0,
              right: 0,
              backgroundColor: 'var(--nb-surface)',
              borderRadius: 12,
              boxShadow: '0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.08)',
              padding: '10px 12px',
              opacity,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 14,
                color: 'var(--nb-text)',
                lineHeight: 1,
              }}
            >
              {zip}
            </div>
            <div
              style={{
                height: 4,
                backgroundColor: 'var(--nb-border)',
                borderRadius: 99,
                marginTop: 8,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${pct}%`,
                  backgroundColor: 'var(--nb-accent)',
                  borderRadius: 99,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Domain pill — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: 18,
          right: 24,
          backgroundColor: 'var(--nb-accent-light)',
          color: 'var(--nb-accent)',
          fontSize: 10,
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: 99,
        }}
      >
        getstreetwise.com
      </div>
    </div>
  );
}
