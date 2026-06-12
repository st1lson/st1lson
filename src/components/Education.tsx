import { GraduationCap, Award } from 'lucide-react';

const educations = [
  {
    degree: "Master's degree, Computer Science",
    institution: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
    location: "Kyiv, Ukraine",
    period: "09/2024 – 05/2026"
  },
  {
    degree: "Bachelor's degree, Computer Science",
    institution: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
    location: "Kyiv, Ukraine",
    period: "09/2020 – 06/2024"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-16 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <div key={idx} className="premium-card animate-fade-in group" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-dark-950 border border-white/5 rounded-2xl text-purple-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 leading-tight">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium mb-4">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-slate-500 text-sm gap-2 sm:gap-4 font-mono bg-dark-950/50 inline-flex px-4 py-2 rounded-lg border border-white/5">
                    <span>{edu.location}</span>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <span className="text-purple-300/70">{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
