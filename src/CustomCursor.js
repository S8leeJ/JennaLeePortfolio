import React, { useEffect, useState } from 'react';

const StarCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setEnabled(finePointer.matches);
    sync();
    finePointer.addEventListener('change', sync);

    if (!finePointer.matches) {
      return () => finePointer.removeEventListener('change', sync);
    }

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => {
      finePointer.removeEventListener('change', sync);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <svg
      className="custom-cursor"
      viewBox="0 0 24 24"
      fill="none"
      stroke="yellow"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        width: 24,
        height: 24,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <polygon points="12 2 15 8.5 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 8.5 12 2" />
    </svg>
  );
};

export default StarCursor;
