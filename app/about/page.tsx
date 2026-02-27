import { Github, Linkedin, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-skin-primary mb-8">About</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-skin-primary text-lg font-medium mb-6">Who I Am</h2>
          <div className="text-skin-base text-base leading-relaxed space-y-4">
            <p>
              I am a software engineer with a strong passion for problem-solving, driven by an analytical and
              solution-oriented mindset. I love designing systems that are scalable, efficient, and maintainable.
              Committed to continuous learning and growth, I strive to deliver
              meaningful impact and drive success in everything I do​. 
            </p>
            <div>
              <p className="mb-3">When I'm not try to solve a problem, you'll find me:</p>
              <ul className="space-y-1 pl-4">
                <li><span className="text-skin-primary">Bed-rotting:</span> Reading manhwa or about technology in bed.</li>
                <li><span className="text-skin-primary">Social:</span> Hanging out with my friends. </li>
                <li><span className="text-skin-primary">Staying active:</span> Hiking and taking walks.</li>
                <li><span className="text-skin-primary">Discovering Life:</span> Going on side-quests to make most of life.</li>
              </ul>
            </div>
            <p>
              I'm a learner. I love learning and I think learning is fun.
            </p>
          </div>
        </section>
        
        <section className="border-t border-skin-line pt-6">
          <h2 className="text-skin-primary text-lg font-medium mb-6">Stalk me</h2>
          <div className="text-skin-base text-base leading-relaxed space-y-4">
            <p>
              I'm always interested in connecting with fellow learners and builders, geeking out over cool tech, 
              discussing our niche interests or collaborating on interesting projects.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <a
                href="https://github.com/georgeey123"
                className="inline-flex items-center gap-2 text-skin-base hover:text-skin-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
                <span>github</span>
              </a>
              <span className="text-skin-base/40">/</span>
              <a
                href="https://www.linkedin.com/in/georgekofioheneadjei"
                className="inline-flex items-center gap-2 text-skin-base hover:text-skin-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin</span>
              </a>                            
              <span className="text-skin-base/40">/</span>
              <a
                href="mailto:gkohene-adjei@gmail.com"
                className="inline-flex items-center gap-2 text-skin-base hover:text-skin-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                <span>email</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
