import { Github, Linkedin, Mail } from 'lucide-react'

export default async function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12 sm:mb-16">
        {/* Profile Picture
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden">
            <img 
              src="/IMG 0473.jpg" 
              alt="Kweku Ayepah" 
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
        
        {/* Name and Title */}
        <h1 className="text-xl sm:text-2xl font-medium text-skin-primary mb-2">George Kofi Ohene-Adjei</h1>
        <p className="text-skin-base text-sm sm:text-base mb-6">Software Engineer, 0x0</p>
        
        {/* Bio */}
        <p className="text-skin-base text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto text-left leading-relaxed">
            Hi I'm George, software engineer that likes to think about problems and how to solve them. Outside of the solutions 
            I try to come up with, I love reading manhwa and about technology. Isekai slop is my guilty pleasure (unashamedly). 
            I try my best to stay active so I can bed-rot without problems when I'm old.  

​        </p>
        
      </div>
      
      {/* Writing Sections */}
      <div className="border-t border-skin-line pt-8">
        <div className="mb-8">
          <h2 className="text-skin-primary text-xl font-medium">Methinks...</h2>
        </div>
        
        <div className="space-y-12">
          {/* Technical Writing */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-skin-primary text-base font-medium">Technical</h3>
              <a 
                href="/posts?category=technical" 
                className="text-skin-accent hover:text-skin-primary transition-colors text-sm"
              >
                View all →
              </a>
            </div>
          <div className="border border-dashed border-skin-line rounded-lg p-4 text-skin-base text-sm leading-relaxed">
            Haven&apos;t thought of anything yet.. my brain is still compiling.
          </div>
        </section>
        </div>
      </div>
    </main>
  )
}
