import React from 'react';
import Link from 'next/link';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * NESTED LAYOUTS (Child Routing Shell):
 * In Angular, you might have a 'FeaturesModule' with its own routing 
 * that points to a specific component acting as a shell:
 * 
 * {
 *   path: 'features',
 *   component: FeaturesShellComponent,
 *   children: [...]
 * }
 * 
 * In Next.js, simply creating a 'layout.tsx' inside 'app/features/' 
 * creates a nested layout.
 * 
 * This layout ONLY wraps the pages inside the 'features/' folder.
 * It will itself be wrapped by the Root Layout (app/layout.tsx).
 */
export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* 
        This Navbar is persistent across all feature pages.
        It's like a sub-header in Angular.
      */}
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">Features Hub</div>
          <div className="space-x-6 text-sm font-medium">
            {/* 
              💡 ANGULAR TO NEXT.JS MAPPING:
              Angular: <a routerLink="/">Home</a>
              Next.js: <Link href="/">Home</Link>
              
              Next.js 'Link' handles client-side navigation (no full page reload).
            */}
            <Link href="/" className="hover:text-blue-400 transition-colors">
              ← Back to Guide
            </Link>
            <Link href="/features" className="hover:text-blue-400 transition-colors">
              All Features
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* 
          Equivalent of <router-outlet> for the 'features' children routes.
        */}
        {children}
      </div>
    </div>
  );
}
