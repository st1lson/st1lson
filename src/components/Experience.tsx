import { Briefcase } from 'lucide-react';

const companies = [
  {
    id: 'emil',
    name: 'EMIL Group',
    location: 'Prague, Czech Republic (Remote)',
    roles: [
      {
        title: 'Software Engineer',
        period: '03/2024 – Present',
        highlights: [
          'Architected an internal payment provider and coordinated integrations with Stripe and Adyen, enabling reliable processing of thousands of daily transactions across a distributed microservices ecosystem.',
          'Designed sub-environment support for a complex multi-tenant architecture, ensuring backward compatibility and high availability matching AWS-grade reliability standards.',
          'Built an automated end-to-end SDK generation and validation pipeline within CI/CD, reducing deployment time by ~1 hour per release and shortening SDK publishing cycles by 15 minutes — improving frontend development efficiency by ~12%.',
          'Implemented security and compliance standards across payment systems, supporting scalable and regulation-aligned transaction processing.',
          'Coordinated a cross-functional team of 5 engineers, managing dependencies and translating complex business requirements into stable, production-ready solutions.'
        ]
      }
    ]
  },
  {
    id: 'oski',
    name: 'Oski Solutions',
    location: 'Remote',
    roles: [
      {
        title: 'Software Engineer',
        period: '04/2023 – 03/2024',
        highlights: [
          'Architected and delivered a standalone WebRTC-based communication solution, enabling low-latency real-time peer-to-peer interactions.',
          'Developed and deployed CI/CD pipelines, improving release reliability and reducing manual deployment effort across AWS environments.',
          'Managed a small engineering team (2 developers) and participated in technical hiring and candidate evaluation.',
          'Optimized SQL queries and indexing strategies, improving database performance by up to 300% and reducing response times.'
        ]
      },
      {
        title: 'Junior Software Engineer',
        period: '06/2022 – 03/2023',
        highlights: [
          'Built 4 full-stack applications across multiple domains using .NET, React, Vue, TypeScript, GraphQL, Tailwind, and AWS.',
          'Contributed to CI/CD pipeline development, reducing deployment time by ~30% and enabling more frequent, reliable releases to AWS environments.',
          'Improved frontend performance by eliminating unnecessary re-renders in React and Vue applications.',
          'Assisted in database optimization efforts, improving query efficiency and overall system performance.'
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-16 animate-fade-in">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Briefcase size={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100">
            Work Experience
          </h2>
        </div>
        
        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-500/50 before:via-indigo-500/50 before:to-transparent">
          {companies.map((company, cIdx) => (
            <div key={company.id} className="relative flex flex-col md:flex-row items-center justify-between animate-fade-in" style={{ animationDelay: `${cIdx * 150}ms` }}>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full border-4 border-dark-950 bg-brand-500 shadow-[0_0_15px_rgba(56,189,248,0.6)] z-10"></div>
              
              <div className="w-full premium-card ml-14 md:ml-0 md:w-[calc(50%-3rem)] mb-8 md:mb-0 relative group">
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-100">{company.name}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-400">
                      {company.location}
                    </span>
                  </div>
                  
                  <div className="space-y-8 mt-6">
                    {company.roles.map((role, rIdx) => (
                      <div key={rIdx} className="relative">
                        {rIdx > 0 && <hr className="border-t border-white/10 my-8" />}
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-slate-100">{role.title}</h4>
                          <span className="text-sm font-medium text-slate-400 bg-black/20 px-3 py-1 rounded-md mt-2 sm:mt-0 w-fit">{role.period}</span>
                        </div>
                        
                        <ul className="space-y-3">
                          {role.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex text-slate-300 leading-relaxed text-sm">
                              <span className="text-brand-500 mr-3 mt-1 opacity-80 flex-shrink-0">▹</span>
                              <span className="opacity-90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty div for the other side of the timeline */}
              <div className={`hidden md:flex md:w-[calc(50%-3rem)] items-center ${cIdx % 2 === 0 ? 'order-first justify-end pr-8' : 'pl-8'}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-100">{company.name}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
