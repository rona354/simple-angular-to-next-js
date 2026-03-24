import Link from 'next/link';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * DYNAMIC ROUTES:
 * Angular: { path: 'features/:id', component: FeatureDetailComponent }
 * Next.js: Folder [id] -> 'app/features/[id]/page.tsx'
 * 
 * ROUTE PARAMETERS:
 * In Angular, you use 'ActivatedRoute.params' (Observable).
 * In Next.js (Server Components), 'params' is a Promise passed directly as a prop.
 */

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FeatureDetailPage({ params }: PageProps) {
  // CRITICAL: Next.js 15+ requires you to AWAIT the params object.
  const { id } = await params;

  return (
    <div className="max-w-2xl mx-auto p-20 text-center">
      <div className="bg-blue-50 text-blue-800 p-3 rounded-full inline-block mb-6 font-mono text-sm">
        Route Parameter: {id}
      </div>
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 capitalize">
        Detail: {id.replace('-', ' ')}
      </h1>
      
      <p className="text-gray-600 text-lg mb-10 leading-relaxed">
        You are currently viewing a Dynamic Route in Next.js. 
        In Angular, this would be handled by your ActivatedRoute service. 
        Here, it's just a prop on your server component!
      </p>

      <Link 
        href="/features"
        className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
      >
        Return to List
      </Link>
    </div>
  );
}
