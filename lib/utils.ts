/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * PIPES vs UTILITY FUNCTIONS:
 * 
 * Angular: 
 * {{ item.date | date:'shortDate' }}
 * or 
 * {{ value | currency:'IDR' }}
 * 
 * Next.js (React):
 * There are no "Pipes" in React. We use standard JavaScript functions. 
 * Because it's "just JavaScript", you don't need to register them 
 * in a module or inject them. You just import and call them in your JSX.
 */

/**
 * A simple formatter to replace the 'currency' pipe.
 */
export function formatCurrency(amount: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * A simple formatter to replace the 'date' pipe.
 */
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}
