import { ItemCard } from '@/components/item-card';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * Angular: app.component.ts (Root Component) + routing
 * Next.js: app/page.tsx (Route Segment Component)
 * 
 * In Next.js App Router, 'page.tsx' is the default file that renders
 * for a specific route (in this case, the root '/').
 * 
 * By default, this is a "Server Component". It runs on the server, 
 * cannot use browser APIs or state (like useState/ngOnInit), but sends 
 * ZERO JavaScript to the browser.
 */

export default function Home() {
  // Simulating data you might define as class properties in Angular
  const frameworkFeatures = [
    { 
      id: 1, 
      title: 'React Server Components (RSC)', 
      desc: 'Components that only run on the server. Think of it like Angular Universal/SSR but at a granular component level, shipping no JS to the client.', 
      isPopular: true 
    },
    { 
      id: 2, 
      title: 'Server Actions', 
      desc: 'Functions that run securely on the server but can be called directly from components or forms. It replaces the need to manually write HttpClient API calls to your own backend.', 
      isPopular: true 
    },
    { 
      id: 3, 
      title: 'App Router', 
      desc: 'Folder-based routing. Instead of AppRoutingModule, you just create folders (like /about/page.tsx).' 
    },
    { 
      id: 4, 
      title: 'Props (Inputs)', 
      desc: 'The equivalent of @Input() in Angular. Data passed down from parent to child.' 
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-16 font-[family-name:var(--font-geist-sans)] text-gray-800">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Angular</span>
            <span className="text-gray-400 text-sm">➡️</span>
            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">Next.js</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mt-4">
            Interactive Migration Guide
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            Phase 1: Components, Inputs (Props), and Control Flow
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Core Concepts</h2>
          
          <div className="flex flex-col gap-5">
            {/* 
              💡 ANGULAR TO NEXT.JS MAPPING:
              Angular: <app-item-card *ngFor="let item of features" [title]="item.title" [description]="item.desc" />
              
              Next.js: We use standard JavaScript Array.map() to iterate. 
              CRITICAL: You MUST provide a unique 'key' prop (similar to trackBy in Angular) 
              so React can efficiently update the list.
            */}
            {frameworkFeatures.map((item) => (
              <ItemCard 
                key={item.id} 
                title={item.title} 
                description={item.desc} 
                isPopular={item.isPopular} 
              />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
