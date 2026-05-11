interface Interest {
  title: string;
  description: string;
  key: string;
  slug: string;
  status: string;
}

let interests: Interest[] = [
    {
      title: "Economic Theory",
      description: "My attempt to understand the world through the lens of economics, game theory, and mechanism design",
      key: "economic-theory",
      slug: "economic-theory",
      status: "Actively Learning"
    },
    // {
    //   title: "Political Analysis",
    //   description: "My very limited take on the complicated but fascinating world of politics",
    //   key: "political-analysis",
    //   slug: "political-analysis",
    // },
    {
      title: "Reading Archive",
      description: "A collection of books and articles I've read and want to share",
      key: "reading-archive",
      slug: "reading-archive",
      status: "Actively Reading"
    },
    // {
    //   title: "Projects",
    //   description: "A collection of projects I'm working on",
    //   key: "projects",
    //   slug: "projects",
    // }
  ];


export function getInterests() {
  return interests;
}