export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-900 backdrop-blur-sm bg-black/50 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Musaix Pro
              </span>
              <div className="hidden md:flex gap-6">
                <a href="#features" className="text-zinc-400 hover:text-white transition">Features</a>
                <a href="#studio" className="text-zinc-400 hover:text-white transition">Studio</a>
                <a href="#library" className="text-zinc-400 hover:text-white transition">Library</a>
                <a href="#pricing" className="text-zinc-400 hover:text-white transition">Pricing</a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="/login" className="text-zinc-400 hover:text-white transition px-4 py-2">
                Login
              </a>
              <a href="/register" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition px-6 py-2 rounded-full font-medium">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center py-32">
            <div className="text-6xl mb-6">🎵</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Create Music Like
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                Never Before
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-8">
              Professional music production, AI-powered beat generation, and unlimited creative possibilities. 
              Your complete music studio in the cloud.
            </p>
            <div className="flex gap-4">
              <a href="/register" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition px-8 py-4 rounded-full font-semibold text-lg">
                Start Creating Free
              </a>
              <a href="#demo" className="border-2 border-purple-600 hover:bg-purple-600/10 transition px-8 py-4 rounded-full font-semibold text-lg">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 py-20">
            <div className="p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition">
              <div className="text-4xl mb-4">🎹</div>
              <h3 className="text-2xl font-bold mb-3">AI Beat Generator</h3>
              <p className="text-zinc-400">Generate professional beats with AI. Customize tempo, genre, and mood instantly.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/20 rounded-2xl hover:border-pink-500/40 transition">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold mb-3">Pro Audio Tools</h3>
              <p className="text-zinc-400">Mix, master, and produce with studio-grade effects and unlimited tracks.</p>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20 rounded-2xl hover:border-red-500/40 transition">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-3">Cloud Collaboration</h3>
              <p className="text-zinc-400">Work with artists worldwide. Real-time collaboration and cloud storage.</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-20 border-t border-zinc-900">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">10M+</div>
                <div className="text-zinc-400">Tracks Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-500 mb-2">500K+</div>
                <div className="text-zinc-400">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">1M+</div>
                <div className="text-zinc-400">Beats Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-zinc-400">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-32 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Create Your Masterpiece?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join thousands of producers, artists, and creators making music with Musaix Pro.
            </p>
            <a href="/register" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition px-10 py-4 rounded-full font-bold text-lg">
              Get Started Now - It's Free
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Musaix Pro</h4>
              <p className="text-zinc-400 text-sm">Professional music production for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="flex flex-col gap-2 text-zinc-400 text-sm">
                <a href="#features" className="hover:text-white transition">Features</a>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
                <a href="#studio" className="hover:text-white transition">Studio</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2 text-zinc-400 text-sm">
                <a href="#about" className="hover:text-white transition">About</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
                <a href="#careers" className="hover:text-white transition">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="flex flex-col gap-2 text-zinc-400 text-sm">
                <a href="#privacy" className="hover:text-white transition">Privacy</a>
                <a href="#terms" className="hover:text-white transition">Terms</a>
                <a href="#cookies" className="hover:text-white transition">Cookies</a>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-900 pt-8 text-center text-zinc-400 text-sm">
            © 2025 Musaix Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
