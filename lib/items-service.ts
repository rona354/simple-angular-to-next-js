/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * SERVICES (@Injectable):
 * In Angular: 
 *   @Injectable({ providedIn: 'root' })
 *   export class ItemService {
 *     constructor(private http: HttpClient) {}
 *     getItems(): Observable<Item[]> { ... }
 *   }
 * 
 * Next.js (Server Side):
 * We don't need a class with a decorator. We just write standard 
 * asynchronous functions. In Server Components, these functions can 
 * even talk directly to your database (no need for a separate API!).
 */

export interface RemoteItem {
  id: number;
  name: string;
  category: string;
}

/**
 * Simulating a backend call (equivalent to HttpClient.get).
 * In a real Next.js app, this could be a 'fetch()' call to an external 
 * API or even a direct database query like 'db.items.findMany()'.
 */
export async function getRemoteItems(): Promise<RemoteItem[]> {
  // Simulating network delay (like a slow Observable/HttpClient call)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    { id: 1, name: 'Server Components', category: 'Backend' },
    { id: 2, name: 'Client Components', category: 'Frontend' },
    { id: 3, name: 'Streaming', category: 'Orchestration' },
    { id: 4, name: 'Suspense', category: 'UX' },
  ];
}
