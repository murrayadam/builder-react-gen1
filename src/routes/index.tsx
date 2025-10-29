import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#282c34] to-[#1a1d23] text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8">
        <img
          src={logo}
          className="h-20 sm:h-28 mb-8 pointer-events-none"
          alt="Builder.io logo"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center max-w-4xl">
          Build Digital Experiences Without the Developer Bottleneck
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl leading-relaxed">
          Builder.io Publish empowers your entire team to create, manage, and publish high-performing experiences—while you maintain full control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.builder.io/c/docs/how-builder-works"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#61dafb] text-[#282c34] font-semibold rounded-lg hover:bg-[#4db8d3] transition-colors text-center"
          >
            Explore the Docs
          </a>
          <a
            href="https://www.builder.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-[#61dafb] text-[#61dafb] font-semibold rounded-lg hover:bg-[#61dafb] hover:text-[#282c34] transition-colors text-center"
          >
            Get Started with Builder
          </a>
        </div>
      </header>

      {/* Three Ways to Use Publish */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1d23]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Three Ways to Use Builder Publish
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Integrate Builder with your existing site or app in the way that works best for your team
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Visual Pages */}
            <div className="bg-[#282c34] p-8 rounded-lg border border-[#3d4452]">
              <h3 className="text-2xl font-bold mb-4 text-[#61dafb]">Visual Pages</h3>
              <p className="text-gray-300 mb-4">
                Use our drag-and-drop editor to build entire pages visually. Perfect for marketing pages, landing pages, and content-driven experiences.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Full-page editing</li>
                <li>✓ Drag-and-drop builder</li>
                <li>✓ Instant previews</li>
              </ul>
            </div>

            {/* Visual Sections */}
            <div className="bg-[#282c34] p-8 rounded-lg border border-[#3d4452]">
              <h3 className="text-2xl font-bold mb-4 text-[#61dafb]">Visual Sections</h3>
              <p className="text-gray-300 mb-4">
                Make specific sections of your pages visually editable. Add targeting and scheduling to personalize experiences for different audiences.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Section-level editing</li>
                <li>✓ Audience targeting</li>
                <li>✓ Content scheduling</li>
              </ul>
            </div>

            {/* Structured Data */}
            <div className="bg-[#282c34] p-8 rounded-lg border border-[#3d4452]">
              <h3 className="text-2xl font-bold mb-4 text-[#61dafb]">Structured Data</h3>
              <p className="text-gray-300 mb-4">
                Fetch data from Builder and use it anywhere—navigation menus, product details, blog content. Manage data-driven experiences across your app.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Dynamic content delivery</li>
                <li>✓ Reusable data models</li>
                <li>✓ App-wide content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-8 bg-[#282c34]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose Builder Publish?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">⚡</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Faster Time to Market</h4>
                <p className="text-gray-300">
                  Publish content and experiences instantly without waiting for developer sprints.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">👥</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Empower Your Team</h4>
                <p className="text-gray-300">
                  Non-developers can create and manage content visually, no code required.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">🎯</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Full Control</h4>
                <p className="text-gray-300">
                  You host and control your code—Builder just handles the content delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">⚙️</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Seamless Integration</h4>
                <p className="text-gray-300">
                  Works with your existing tech stack, frameworks, and hosting setup.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">🚀</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Optimal Performance</h4>
                <p className="text-gray-300">
                  Asynchronous content loading ensures fast page loads and great user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#61dafb] text-3xl flex-shrink-0">📊</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Data-Driven Content</h4>
                <p className="text-gray-300">
                  Create reusable content models that scale across pages and experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1d23]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How Builder Publish Works
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-[#61dafb] text-[#282c34] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Connect Your Site</h3>
                <p className="text-gray-400">
                  Integrate Builder with your existing codebase. You stay in control of your hosting and infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#61dafb] text-[#282c34] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Define Your Content</h3>
                <p className="text-gray-400">
                  Create models for Pages, Sections, or Data. Structure your content the way your app needs it.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#61dafb] text-[#282c34] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Edit Visually</h3>
                <p className="text-gray-400">
                  Your team uses the drag-and-drop builder to create and edit content without touching code.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-[#61dafb] text-[#282c34] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Publish Instantly</h3>
                <p className="text-gray-400">
                  Content is delivered asynchronously to your site, keeping performance optimal while enabling real-time updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-r from-[#282c34] to-[#1a1d23]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Empower Your Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join teams using Builder Publish to ship faster and reduce developer bottlenecks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.builder.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#61dafb] text-[#282c34] font-semibold rounded-lg hover:bg-[#4db8d3] transition-colors"
            >
              Start with Builder
            </a>
            <a
              href="https://www.builder.io/c/docs/how-builder-works"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#61dafb] text-[#61dafb] font-semibold rounded-lg hover:bg-[#61dafb] hover:text-[#282c34] transition-colors"
            >
              Read Full Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-[#1a1d23] border-t border-[#3d4452]">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>
            Learn more about Builder.io Publish at{' '}
            <a
              href="https://www.builder.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#61dafb] hover:underline"
            >
              builder.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
