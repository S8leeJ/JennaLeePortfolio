export default function Timeline() {
  const events = [
    {
      year: '2025',
      title: 'Started at UT Austin',
      description: 'Began studying Computer Science, more to come!',
    },
    {
      year: '2021-2025',
      title: 'Seven Lakes High School',
      description: 'Ranked 8/887 students | 4.8261 Weighted GPA',
    },
    {
      year: '',
      title: 'Leadership + Extracurriculars',
      description: 'Held numerous positions in various organizations',
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
    <div className="py-20 px-6 text-white ">
      <h2 className="text-4xl font-bold font-sans mb-12">My Experience</h2>
      <div className="relative border-l border-gray-700 max-w-3xl mx-auto ">
        {events.map((event, index) => (
          <div key={index} className="mb-10 ml-6 ">
            <div className="absolute w-4 h-4 bg-yellow-400 -left-2 border-2 border-white " />
            <p className="text-sm text-gray-400">{event.year}</p>
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-300">{event.description}</p>

            {/* Bulleted List */}
            {event.bullets && (
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                {event.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
