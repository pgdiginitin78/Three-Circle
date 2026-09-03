import React from 'react';

export default function BlueprintGrid({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
