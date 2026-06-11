interface Interest {
  title: string;
  description: string;
  key: string;
  slug: string;
  status: string;
}

let interests: Interest[] = [
    {
      title: "The Arena",
      description: "My attempt to understand the world through the lens of economics, politics, and worldy systems",
      key: "the-arena",
      slug: "the-arena",
      status: "Actively Learning"
    },
    {
      title: "Friction & Flow",
      description: "My thoughts on productivity, creativity, and the art of getting things done",
      key: "friction-and-flow",
      slug: "friction-and-flow",
      status: "Actively Trying"
    },
    {
      title: "Reading Archive",
      description: "A collection of books and articles I've read and want to share",
      key: "reading-archive",
      slug: "reading-archive",
      status: "Actively Reading"
    },
    {
      title: "Build Log",
      description: "Anything related to the things I am builing, have built, or will pretent to",
      key: "build-log",
      slug: "build-log",
      status: "Actively Working"
    }
  ];


export function getInterests() {
  return interests;
}