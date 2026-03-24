import Link from 'next/link';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * THE FEATURES INDEX PAGE:
 * Route: /features
 * 
 * This is a standard page component. Because it's inside the 'features' 
 * folder, it automatically gets wrapped by 'app/features/layout.tsx'.
 */
export default function FeaturesPage() {
  const nextFeatures = [
    { id: 'routing', title: 'File-based Routing', desc: 'No more long AppRoutingModule files. Folders are routes.' },
    { id: 'streaming', title: 'Streaming with Suspense', desc: 'Instantly send parts of the page before others are ready.' },
    { id: 'optimization', title: 'Image/Font Optimization', desc: 'Built-in handling for assets without complex plugins.' },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Next.js Core Features</h1>
        <p className="text-gray-500 mt-2 italic text-lg">
          Explore the routing and navigation concepts.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nextFeatures.map((f) => (
          <div key={f.id} className="border border-gray-100 p-6 rounded-xl bg-gray-50 hover:border-blue-200 transition-all">
            <h2 className="font-bold text-gray-800 text-lg mb-2">{f.title}</h2>
            <p className="text-sm text-gray-600 mb-6 min-h-[40px] leading-relaxed">{f.desc}</p>
            
            {/* 
              💡 ANGULAR TO NEXT.JS MAPPING:
              Angular: [routerLink]="['/features', f.id]"
              Next.js: href={`/features/${f.id}`}
            */}
            <Link 
              href={`/features/${f.id}`}
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              Learn More 
              <span className="ml-1">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
