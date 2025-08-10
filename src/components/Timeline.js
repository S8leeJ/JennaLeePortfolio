export default function Timeline() {
  const events = [
    {
      year: '2025',
      title: 'Started at UT Austin',
      description: 'Began studying Computer Science, more to come!',
    },
    {
      year: 'July-Present 2025',
      title: 'Frontend Developer at Stellar Learning',
      description: 'Built and optimized scalable, intuitive front-end features for an AI-powered educational platform.',
      bullets: [
        'Improved UI responsiveness and usability by debugging and refining Svelte, HTML, JavaScript, and Tailwind CSS'
      ],
    },
     {
      year: 'July-Present 2025',
      title: 'Lead Instructor at Code Ninjas',
      description: '',
      bullets: [
        'Taught 30+ students (ages 6–7) programming and engineering fundamentals using LEGO Robotics, Roblox Studio, Minecraft Redstone, and visual programming tools, designing engaging and age-appropriate lessons.'
      ],
    },
    {
      year: '2021-2025',
      title: 'Seven Lakes High School',
      description: 'Ranked 8/887 students | 4.8387 Weighted GPA',
       bullets: [
        'President of Orchestra & Tri-M',
        'Media Chair of National Honor Society',
        'Historian of CSHS',
        'Robotics Awards Director',
        'Technology Student Association (Member)',
      ],
    },
  
    {
      year: '2024-2025',
      title: 'AFS Global STEM Academies Scholar',
      description: 'Received a scholarship for a 12-week virtual; 4-week exchange (Brazil)',
      bullets: [
        'Earned the Advanced Certificate on Global Competence for Social Impact from University of Pennsylvania Center for Social Impact Strategy',
        'Developed and presented a first-place project focused on anti-river erosion, presented at BP'
      ],
    },
    {
      year: '2021-2025',
      title: 'Orchestra (Violin) Honors and Awards',
      bullets: [
        'TMEA Honor String Orchestra winner/soloist (2024)',
        'TMEA All-State Violinist (rank 100 across the state of Texas)',
        'Two time Outstanding Performer for Katy Young Artist Competition',
      ],
    }
  ];

  return (
    <div className="text-white">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600" />
        
        {events.map((event, index) => (
          <div key={index} className="relative mb-8 ml-12 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Timeline Dot */}
            <div className="absolute -left-8 top-2 w-5 h-5 bg-blue-400 rounded-full border-3 border-slate-900 shadow-lg" />
            
            {/* Content Card */}
            <div className="modern-card p-5">
              {event.year && (
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-3 border border-blue-500/30">
                  {event.year}
                </div>
              )}
              
              <h3 className="font-outfit text-xl font-semibold mb-3 text-white">
                {event.title}
              </h3>
              
              {event.description && (
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
              )}

              {/* Bulleted List */}
              {event.bullets && (
                <ul className="space-y-2">
                  {event.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
