import { Server, Database, Cloud, Code, Terminal, Cpu } from 'lucide-react';

const skills = [
  { 
    category: 'Backend Languages', 
    icon: <Code size={24} className="text-brand-500" />,
    items: ['C# (.NET)', 'Node.js', 'Golang', 'Java', 'Python'],
    colSpan: 'md:col-span-2'
  },
  { 
    category: 'Cloud Infrastructure', 
    icon: <Cloud size={24} className="text-indigo-400" />,
    items: ['AWS', 'Docker', 'Kubernetes'],
    colSpan: 'md:col-span-1'
  },
  { 
    category: 'Databases', 
    icon: <Database size={24} className="text-emerald-400" />,
    items: ['PostgreSQL', 'T-SQL', 'MongoDB', 'Redis'],
    colSpan: 'md:col-span-1'
  },
  { 
    category: 'Architecture', 
    icon: <Server size={24} className="text-purple-400" />,
    items: ['Microservices', 'Event-Driven', 'Multi-tenant'],
    colSpan: 'md:col-span-1'
  },
  { 
    category: 'Message Brokers', 
    icon: <Cpu size={24} className="text-rose-400" />,
    items: ['RabbitMQ', 'Kafka'],
    colSpan: 'md:col-span-1'
  },
  { 
    category: 'Frontend & Tools', 
    icon: <Terminal size={24} className="text-amber-400" />,
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind', 'CI/CD Pipelines'],
    colSpan: 'md:col-span-3'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Technologies and tools I leverage to build scalable, high-performance distributed systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div 
              key={idx} 
              className={`premium-card group ${skillGroup.colSpan} flex flex-col justify-between animate-fade-in`} 
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-6">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 rounded-lg bg-black/40 border border-white/5 text-slate-300 text-sm font-medium hover:border-brand-500/50 hover:text-white transition-colors cursor-default backdrop-blur-sm shadow-inner"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
