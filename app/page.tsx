import { ItemCard } from '@/components/item-card';
import { formatDate } from '@/lib/utils';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * THE ROOT COMPONENT (Route Segment Component)
 * 
 * Next.js App Router: app/page.tsx
 * Angular: app.component.ts (or the component registered for the path '/')
 * 
 * LIFECYCLE HOOKS:
 * In Angular: 
 *   export class HomeComponent implements OnInit {
 *     ngOnInit() {
 *       // Logic to fetch data or initialize component state
 *     }
 *   }
 * 
 * In Next.js Server Components:
 *   There are NO lifecycle hooks like 'ngOnInit' or 'ngOnChanges'.
 *   The component is simply a function that is executed ONCE on the server.
 *   If you need to fetch data, you just do it inside the function body 
 *   (or make it 'async' and 'await' a database call).
 * 
 *   For client-side lifecycle (like ngOnInit in the browser), 
 *   you would use the 'useEffect' hook in a 'use client' component.
 */
export default function Home() {
  // Simulating data you might define as class properties in Angular
  const today = formatDate(new Date());

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
          <div className="mt-4 text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">
            {/* Using our 'formatDate' utility instead of Angular's DatePipe */}
            Updated: {today}
          </div>
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
