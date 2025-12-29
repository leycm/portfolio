import Link from "next/link";
import { jetbrainsMono } from "@/lib/fonts";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 border-t border-border/50 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`${jetbrainsMono.className} text-sm text-slate-500 mb-4 md:mb-0`}>
            © {currentYear} leycm. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/imprint" 
              className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
