import kingdom from '../Images/kingdom.png'; // adjust path as needed
import kingdomVid from '../Images/Kingdom.mov';
import unityOsakaVid from '../Images/UnityOsaka.mov';
import Osaka from '../Images/Osaka.png';
import azul from '../Images/Azul.png';
import azulVid from '../Images/Azul.mov';
import sparrowVid from '../Images/Sparrow.mov';
import sparrow from '../Images/sparrow.png';
import Datasci from '../Images/Datasci0.png';
import DatasciVid from '../Images/Datasci.mov';
import VerVid from '../Images/Ver.mov';
import Ver from '../Images/Ver.png';
import AllClear from '../Images/AllClear.png'
//import AllClearVid from '../Images/AllClear.mov'

const projects = [
  {
    title: 'AllClear – Emergency Response App',
    date: 'July 2025',
    image: AllClear,
    shortDescription: 'Real-time emergency response platform for disaster awareness and location safety',
    longDescription:
      'AllClear is a full-stack web app designed to keep users informed and safe during natural disasters. It allows users to view real-time hazard updates, weather overlays, and share their location with trusted contacts. Built in 36 hours during the Open Summer Hackathon, the app integrates OpenWeatherMap data, multi-hazard overlays using Leaflet.js, and secure user management with JWT-authenticated sessions. The project earned 1st in the Full Stack category among 100+ participants.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenWeatherMap API', 'Leaflet.js'],
    github: 'https://github.com/S8leeJ/allclear',
    demo: 'https://www.youtube.com/watch?v=oH4qrkiLmvw',
    //videoUrl: AllClearVid

  },
  {
    title: 'Kingdom Builder',
    image: kingdom,
    shortDescription: 'Java-based strategy board game recreated with full game logic and graphics.',
    longDescription:
      'Kingdom Builder is a complete digital adaptation of the strategic board game, developed using Java AWT and Swing for interactive GUI elements, supporting card drawing, settlement placement, terrain highlighting, endgame scoring, and more. The game handles complete turn states, dynamic rendering, and user interaction across multiple rounds of gameplay.',
    tech: ['Java', 'Java AWT/Swing', 'Object-Oriented Programming'],
    github: 'https://github.com/S8leeJ/KingdomBuilder-EJJ',
    port: 'https://docs.google.com/document/d/109vskRagvIp-ZNfAtPxBfnOF9n0n0cLAyR8Lyizfccc/edit?usp=sharing',
    videoUrl: kingdomVid

  },
  {
    title: 'Osaka Dash',
    image: Osaka,
    shortDescription: 'Unity RPG with minigames and NPC quests across the city of Osaka.',
    longDescription:
      'Osaka Dash is an immersive Unity-based RPG that blends exploration, historical education, and interactive gameplay. Players navigate the city of Osaka, complete quests from NPCs, and engage in various minigames while learning about cultural landmarks, using maps, and understanding public transportation systems.',
    tech: ['Unity', 'C#', '2D/3D Game Design', 'Tilemaps', 'Cinemachine', 'Animation Controller'],
    github: 'https://github.com/S8leeJ/UnityGroupProject',
    demo: '',
    videoUrl: unityOsakaVid
  }
  ,
  {
    title: 'Azul Tile',
    image: azul,
    shortDescription: 'Java recreation of the Azul board game with interactive tile mechanics.',
    longDescription:
      'Azul Tile is a complete digital adaptation of the strategic board game Azul, built entirely from scratch in Java. It uses Java AWT and Swing to create an interactive GUI with full support for game logic, tile drafting, wall patterns, and endgame scoring.',
    tech: ['Java', 'Java AWT/Swing', 'Object-Oriented Design'],
    github: 'https://github.com/EvuhLi/AzulTile',
    port: 'https://docs.google.com/document/d/1428-xlBuNChgJ9U-SDOi1Q7OlDibVh58wX4jslP0Fn0/edit?usp=sharing',
    videoUrl: azulVid

  },
  {
    title: 'Sparrow',
    image: sparrow,
    shortDescription: 'Interactive educational software to teach young kids programming skills.',
    longDescription:
      'Sparrow is a dynamic front-end web application developed using HTML, JavaScript, and CSS, enhanced with animations created in Adobe Express. Placed 3rd in the state at the Technology Student Association competition, recognized for its creativity, design, and functionality.',
    tech: ['HTML', 'JavaScript', 'CSS', 'Adobe Express', 'Web Animation'],
    github: 'https://github.com/Santiago11234/Sparrow',
    videoUrl: sparrowVid
  },
  {
    title: 'Data science and Analytics',
    image: Datasci,
    shortDescription: 'Data science project analyzing trends and patterns in cybersecurity threats.',
    longDescription:
      'This project applies data science and analytics techniques to real-world cybersecurity attack datasets, uncovering patterns in threat types, frequency, and affected sectors. Using Python, various statistical tests and clustering methods were applied to identify anomalies, trends, and risk zones. The analysis placed 1st place for Regionals in the Technology Student Association Competition.',
    tech: ['Python', 'R', 'Data Visualization', 'Statistical Analysis'],
    demo: 'https://www.canva.com/design/DAF2ogiTYdE/7SmCUK88GC6-_vAS4vffVg/view?utm_content=DAF2ogiTYdE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h113492b658',
    videoUrl: DatasciVid
  },
  {
    title: 'Verio Barreira',
    image: Ver,
    shortDescription: 'Sustainability-focused website built for AFS Global STEM, awarded 1st place.',
    longDescription:
      'Verio Barreira is a sustainability-focused website developed using HTML, CSS, and JavaScript as part of the AFS Global STEM Academies. The site explores barriers to clean energy and community resilience through educational content, data storytelling, and cultural context. Presented to BP executives, it was awarded 1st place overall for its innovation, impact, and design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Adobe Express', 'Sustainability Research'],
    port: 'https://www.canva.com/design/DAGKBMBwhsU/MAplTI-Oo49pVNmMHQBY2w/view?utm_content=DAGKBMBwhsU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h377422f479',
    demo: 'https://s8leej.github.io/Verio-Barreiro-BP/#home',
    videoUrl: VerVid
  },
];

export default projects;
