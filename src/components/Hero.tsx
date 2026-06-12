import { Mail, ArrowRight, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 animate-fade-in flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

        <div className="flex-1 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-500 mb-8 delay-100 backdrop-blur-md">
            <Code2 size={16} />
            <span className="text-sm font-semibold tracking-wide uppercase">Senior Backend Engineer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-6 leading-[1.1] tracking-tight delay-200">
            Designing systems that <br className="hidden md:block" />
            <span className="text-gradient">scale flawlessly.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed delay-300">
            Hi, I'm <strong>Maksym Stelmashenko</strong>. I specialize in designing and delivering robust solutions in complex, multi-tenant environments using Node.js, Go, C#, and Java.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 delay-400">
            <a href="mailto:maksym.stelmashenko@gmail.com" className="btn-primary">
              <Mail size={20} /> Let's Talk
            </a>
            <a href="#experience" className="btn-secondary group">
              View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-4 sm:ml-4 mt-4 sm:mt-0">
              <a href="https://github.com/st1lson" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-brand-500 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/maksym-stelmashenko" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-brand-500 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:flex flex-1 justify-end delay-500">
          <div className="premium-card w-full max-w-md p-6 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs text-slate-500 font-mono">api_gateway.go</span>
            </div>
            <pre className="text-sm font-mono text-slate-300 overflow-x-auto leading-loose">
              <code>
                <span className="text-brand-500">func</span> <span className="text-blue-400">HandlePayment</span>(req Request) Response {'{\n'}
                {'  '}if err := <span className="text-indigo-400">validate</span>(req); err != nil {'{\n'}
                {'    '}return ErrorResponse(400, err){'\n'}
                {'  }\n'}
                {'\n'}
                {'  '}tx, err := db.<span className="text-indigo-400">BeginTransaction</span>(){'\n'}
                {'  '}defer tx.<span className="text-indigo-400">Rollback</span>(){'\n'}
                {'\n'}
                {'  '}<span className="text-slate-500">// Processing thousands of daily txs...</span>{'\n'}
                {'  '}result := <span className="text-indigo-400">processStripePayment</span>(req, tx){'\n'}
                {'  '}tx.<span className="text-indigo-400">Commit</span>(){'\n'}
                {'\n'}
                {'  '}return Success(result){'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
