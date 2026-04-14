export const skills = {
  languages: [
    { name: "Python", icon: "🐍", proficiency: 90 },
    { name: "Java", icon: "☕", proficiency: 85 },
    { name: "JavaScript", icon: "JS", proficiency: 85 },
    { name: "C", icon: "C", proficiency: 70 },
    { name: "MATLAB", icon: "M", proficiency: 65 },
    { name: "Assembly", icon: "ASM", proficiency: 60 },
  ],
  frameworks: [
    { name: "React", icon: "⚛️", proficiency: 85 },
    { name: "React Native", icon: "📱", proficiency: 80 },
    { name: "TensorFlow", icon: "🧠", proficiency: 75 },
    { name: "Keras", icon: "K", proficiency: 75 },
    { name: "NumPy", icon: "NP", proficiency: 80 },
  ],
  tools: [
    { name: "Git", icon: "📦", proficiency: 85 },
    { name: "Linux", icon: "🐧", proficiency: 75 },
    { name: "LaTeX", icon: "📄", proficiency: 70 },
    { name: "Arduino", icon: "🤖", proficiency: 65 },
    { name: "Raspberry Pi", icon: "🍓", proficiency: 65 },
  ],
};

export const bio = {
  name: "Oisin Farrell",
  title: "Computer Science Student",
  location: "Dublin, Ireland",
  email: "contact@oisinfarrell.com", // Placeholder - update with real email
  github: "https://github.com/oisinfarrell00",
  linkedin: "https://www.linkedin.com/in/oisin-farrell/", // Placeholder - update with real LinkedIn
  description: `I am a computer science student at Trinity College Dublin (TCD). I have just completed my Erasmus year at the Royal Institute of Technology (KTH) in Stockholm, Sweden. I have an interest in all aspects of computer science and hope to pursue a career in this field after graduation.`,

  education: [
    {
      degree:
        "B.A. (Moderatorship) Honours Bachelor's Degree in Computer Science",
      institution: "Trinity College Dublin",
      location: "Dublin, Ireland",
      period: "2018 - Present",
      grade: "Year 1: 65, Year 2: 70",
      modules: [
        "Algorithms and Data Structures",
        "Telecommunications",
        "Concurrency and Operating Systems",
        "Computer Architecture",
        "Team Programming Project",
      ],
    },
    {
      degree:
        "Bachelor's Programme in Information and Communication Technology",
      institution: "Royal Institute of Technology (KTH)",
      location: "Stockholm, Sweden",
      period: "2020 - 2021",
      description: "Erasmus Programme",
      modules: [
        "Statistics Theory and Probability",
        "Operating Systems",
        "Artificial Intelligence and Applied Methods",
        "Mobile App Development",
        "Sustainable Development and ICT",
        "Introduction to Internet Security",
        "Internetworking",
      ],
    },
  ],

  experience: [
    {
      role: "Maths Tutor",
      company: "JustMaths.ie",
      location: "Dublin, Ireland",
      period: "2018 - Present",
      description:
        "Teaching mathematics to junior and leaving cert students, developing communication and teaching skills.",
    },
    {
      role: "Camp Counsellor",
      company: "YMCA Camp Lakewood",
      location: "Missouri, United States",
      period: "Summer 2019",
      description:
        "Teaching computer skills to children aged 7-17, leading activities and developing leadership skills.",
    },
  ],

  interests: [
    {
      title: "Sports",
      description:
        "I played football for over ten years. In this time I captained my team to three league titles. Playing football has taught me the value of team work and communication as they are the key components to a successful football team.",
      icon: "⚽",
    },
    {
      title: "Travelling",
      description:
        "In 2018 I travelled to Australia for the summer to experience what the Land Down Under had to offer. I continued to have a passion for travelling and exercised this love by working in America for a summer. I then went on to do a year abroad in Sweden where I immersed myself in Swedish culture. This included a lot of Fika. (Fika is basically tea and some baked goods.) Travelling has allowed me to develop a lot as a person and has greatly diversified my professional network.",
      icon: "✈️",
    },
  ],
};
