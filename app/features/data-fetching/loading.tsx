/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * LOADING UI (Skeleton / Resolvers):
 * In Angular, you might handle loading manually in each component:
 *   *ngIf="isLoading" <spinner />
 * Or use a Route Resolver to delay navigation until data is ready.
 * 
 * In Next.js App Router:
 * By simply creating a file named 'loading.tsx', Next.js 
 * automatically wraps your page in a React 'Suspense' boundary.
 * 
 * While 'page.tsx' is "awaiting" the data fetching, 
 * this 'loading.tsx' component will be shown instantly.
 */
export default function Loading() {
  return (
    <div className="animate-pulse space-y-8">
      <header>
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </header>

      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="border border-gray-100 rounded-xl h-48 bg-gray-50"></div>
      </div>
      
      <div className="h-32 bg-gray-100 rounded-xl"></div>
    </div>
  );
}
