import { getRemoteItems } from '@/lib/items-service';
import { CounterButton } from '@/components/interactive/counter-button';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * DATA FETCHING IN SERVER COMPONENTS:
 * 
 * In Angular: 
 *   ngOnInit() {
 *     this.itemService.getItems().subscribe(data => this.items = data);
 *   }
 * 
 * In Next.js (App Router):
 *   You make the component function 'async' and simply 'await' the data 
 *   directly in the function body. No Observables, no subscriptions, 
 *   no memory leak worries!
 * 
 *   This runs on the SERVER. The data is fetched before the page 
 *   ever reaches the user's browser.
 */
export default async function DataFetchingPage() {
  // Directly "calling" our service-like function (No DI needed here!)
  const items = await getRemoteItems();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Data Fetching & RSC</h1>
        <p className="text-gray-500 mt-2 italic text-lg">
          Replacing Observables and HttpClient with async/await.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span className="p-1 bg-green-100 text-green-700 rounded text-xs uppercase font-black">Server Side</span>
          Fetched Items
        </h2>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-3 border-b">ID</th>
                <th className="px-6 py-3 border-b">Name</th>
                <th className="px-6 py-3 border-b">Category</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 border-b font-mono">#{item.id}</td>
                  <td className="px-6 py-4 border-b font-semibold">{item.name}</td>
                  <td className="px-6 py-4 border-b">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {item.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 
        💡 ANGULAR TO NEXT.JS MAPPING:
        Notice we are mixing a SERVER COMPONENT (this page) 
        with a CLIENT COMPONENT (the button).
        
        This is the "Island Architecture" feel of Next.js.
        The table is static HTML (zero JS), but the button below is interactive.
      */}
      <section>
        <CounterButton />
      </section>
    </div>
  );
}
