/**
 * 💡 ANGULAR TO NEXT.JS MAPPING:
 * 
 * NESTED LAYOUTS:
 * Next.js allows you to have a 'layout.tsx' at ANY folder level.
 * This layout will ONLY apply to the pages inside this folder (and subfolders).
 * 
 * Think of it as a sub-module in Angular with its own template wrapper.
 * This layout will be "nested" INSIDE the Root Layout (app/layout.tsx).
 */

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {/* 
        This is a local navigation bar only for the /features section.
        In Angular, you'd have a separate component or a named <router-outlet>.
      */}
      <nav className="bg-gray-100 border-b p-4 flex justify-center gap-6 text-sm font-medium text-gray-500">
        <span className="text-blue-600 border-b-2 border-blue-600 px-2">FEATURES MODULE</span>
        <span>Documentation</span>
        <span>Settings</span>
      </nav>

      {/* The nested content (page.tsx) will render here */}
      {children}
    </div>
  );
}
