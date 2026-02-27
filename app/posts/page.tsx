import { ChevronLeft, ChevronRight } from 'lucide-react'

export default async function PostsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium text-skin-primary">Posts</h1>
      </div>
      
      <div className="border border-dashed border-skin-line rounded-lg p-4 text-skin-base text-sm leading-relaxed">
        Haven&apos;t thought of anything yet.. the drafts are still fermenting.
      </div>
      
      <nav className="flex justify-between items-center mt-12 pt-8 border-t border-skin-line" aria-label="Pagination">
        <a 
          href="#" 
          className="flex items-center space-x-1 text-skin-base hover:text-skin-primary transition-colors text-sm opacity-50 cursor-not-allowed"
          aria-label="Previous"
          aria-disabled="true"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </a>
        <a 
          href="/posts/2" 
          className="flex items-center space-x-1 text-skin-base hover:text-skin-primary transition-colors text-sm"
          aria-label="Next"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </nav>
    </main>
  )
}
