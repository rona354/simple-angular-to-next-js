'use client';

import { useState } from 'react';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * THE CLIENT-SIDE COMPONENT:
 * In Angular, all components are client-side by default. They can 
 * use 'ngOnInit', 'useState' (like signals), and 'Event Listeners' (click).
 * 
 * In Next.js App Router, you must OPT-IN to client-side interactivity 
 * by adding the "use client" directive at the top.
 * 
 * When to use "use client"?
 * 1. You need Hooks (useState, useEffect).
 * 2. You need Event Listeners (onClick, onChange).
 * 3. You need Browser APIs (window, localStorage).
 */
export function CounterButton() {
  // Similar to Angular Signals or simple class properties with change detection
  const [count, setCount] = useState(0);

  return (
    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
      <h3 className="text-blue-800 font-bold mb-2">I am a Client Component!</h3>
      <p className="text-blue-600 mb-4 text-sm">
        I can handle state and clicks just like an Angular component.
      </p>
      
      <button 
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all active:scale-95"
      >
        Clicks: {count}
      </button>
    </div>
  );
}
