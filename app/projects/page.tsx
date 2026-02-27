import Breadcrumb from '../components/Breadcrumb'

export default function ProjectsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', current: true }
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-skin-base mb-2">Projects</h1>
        <p className="text-skin-base mb-8">Some of the projects I've built over the years.</p>
        
        <div className="grid gap-8 md:grid-cols-1">
          <div className="border border-skin-line rounded-lg p-6 hover:border-skin-accent transition-colors">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium text-skin-base">Kado</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-skin-card text-skin-base rounded-full">
                Coming soon
              </span>
            </div>
            <p className="text-skin-base">
              A gifting-first marketplace that connects local businesses with customers, making it effortless to send thoughtful gifts while keeping small shops front and center.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
