import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-dark-950 min-h-screen selection:bg-brand-500/30 selection:text-brand-200">
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark-950/60 backdrop-blur-xl border-b border-white/5 py-5 transition-all duration-300">
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <a href="#" className="text-2xl font-black text-slate-100 tracking-tighter hover:text-brand-500 transition-colors">
            st1lson<span className="text-brand-500">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest">
            <a href="#experience" className="text-slate-400 hover:text-brand-400 transition-colors relative group">
              Experience
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#skills" className="text-slate-400 hover:text-brand-400 transition-colors relative group">
              Skills
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#education" className="text-slate-400 hover:text-brand-400 transition-colors relative group">
              Education
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="mailto:maksym.stelmashenko@gmail.com" className="px-6 py-2 rounded-full border border-white/10 hover:border-brand-500 text-slate-100 hover:bg-brand-500/10 transition-all">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>

      <footer className="py-12 border-t border-white/5 mt-32 text-center text-slate-500 text-sm bg-dark-900/30">
        <div className="container mx-auto px-6">
          <p className="font-mono">
            © {new Date().getFullYear()} Maksym Stelmashenko.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
