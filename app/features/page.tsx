import Link from 'next/link';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * ROUTING:
 * In Angular, you define routes in 'app-routing.module.ts':
 * { path: 'features', component: FeaturesComponent }
 * 
 * In Next.js App Router, the folder name IS the route. 
 * 'app/features/page.tsx' -> renders at '/features'
 */

export default function FeaturesPage() {
  const nextFeatures = [
    { id: 'routing', name: 'File-based Routing', desc: 'Folder structure determines your URL.' },
    { id: 'layouts', name: 'Nested Layouts', desc: 'Each folder can have its own layout.tsx.' },
    { id: 'navigation', name: 'Optimized Navigation', desc: 'The <Link> component pre-fetches pages for instant navigation.' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-12">
      <header className="mb-10">
        {/* 
          💡 ANGULAR TO NEXT.JS MAPPING:
          Angular: <a routerLink="/">Back</a>
          Next.js: <Link href="/">Back</Link>
          
          <Link> is highly optimized. It doesn't do a full browser reload.
        */}
        <Link 
          href="/" 
          className="text-blue-600 hover:underline mb-4 inline-block font-medium"
        >
          ← Back to Overview
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Next.js Routing Features</h1>
      </header>

      <ul className="grid gap-6">
        {nextFeatures.map((f) => (
          <li key={f.id} className="border p-6 rounded-xl hover:bg-gray-50 transition-colors">
            {/* 
              Dynamic Link: 
              Angular: [routerLink]="['/features', f.id]"
              Next.js: href={`/features/${f.id}`}
            */}
            <Link href={`/features/${f.id}`} className="group">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
                {f.name} →
              </h2>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
