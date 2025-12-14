'use client';

import Snowfall from 'react-snowfall';

export default function SnowfallOverlay() {
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, pointerEvents: 'none', zIndex: 20, opacity: 0.2 }}>
      <Snowfall snowflakeCount={120} />
    </div>
  );
}

