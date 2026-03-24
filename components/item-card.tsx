import React from 'react';

/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * Angular: 
 * @Component({ selector: 'app-item-card', template: `...` })
 * export class ItemCardComponent {
 *   @Input() title!: string;
 *   @Input() description!: string;
 *   @Input() isPopular?: boolean;
 * }
 * 
 * Next.js (React):
 * We define an interface for our inputs, called "Props".
 * The component is a simple JavaScript/TypeScript function that receives these Props.
 */

interface ItemCardProps {
  title: string;
  description: string;
  isPopular?: boolean;
}

// Destructuring the props directly in the function arguments
export function ItemCard({ title, description, isPopular }: ItemCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        {/* Angular Interpolation: {{ title }} -> React: {title} */}
        {title}
        
        {/* 
          Angular: *ngIf="isPopular" 
          React: Use logical AND (&&) or ternary (condition ? true : false) 
        */}
        {isPopular && (
          <span className="ml-3 text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-medium">
            Hot Concept
          </span>
        )}
      </h3>
      
      {/* 
        Notice we use 'className' instead of 'class' in React (JSX).
        This is because 'class' is a reserved keyword in JavaScript.
      */}
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
