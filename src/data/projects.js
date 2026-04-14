export const projects = [
  {
    id: 'recipe-app',
    title: 'React Recipe App',
    slug: 'recipe-app',
    category: 'web',
    description: 'A recipe discovery app built with React that helps users find recipes based on ingredients using the Edamam API.',
    longDescription: `Over the last two years I have gained an interest in cooking. It probably correlates to having nothing to do during lockdown and moving out. There are only so many days in a row one can have pasta and store bought sauce. Not to mention the fact that cooking your own food is much cheaper than eating out.

Despite my love for cooking I constantly find myself struggling to decide what to make. I often have a core ingredient that I want to add but I have no idea what dish to make. To try alleviate some of the brain power required to come up with a dish and to learn some React/JavaScript along the way I decided to make a recipe app.

The app was made as a personal project for my own use. It is made in JavaScript and was Styled in CSS. I used Edamam's API to make requests and fetch data. The app is very basic and allows the user to search for new recipes. The app then displays these in neat boxes to make the app look more presentable.

The idea for this project came into fruition a couple of years ago when I was only new to programming. The original project was a Python project that would take a weekly meal plan and produce a list of all the groceries that I needed to buy for that week. I hope to combine this idea and the app to create an all in one meal plan recipe app.`,
    tech: ['React', 'JavaScript', 'CSS', 'Edamam API'],
    images: [
      '/images/projects/recipe app1.JPG',
      '/images/projects/recipe app2.JPG',
      '/images/projects/recipe app3.JPG',
    ],
    featured: true,
    date: '2022',
    links: {},
  },
  {
    id: 'trocaire-app',
    title: 'Trocaire Fall Armyworm App',
    slug: 'trocaire-armyworm',
    category: 'mobile',
    description: 'Android app for farmers in developing countries to report and manage fall armyworm infestations with real-time mapping.',
    longDescription: `During second year I participated in a software engineering project. The team for the project was made up of three third years, who acted as team managers and three second years, who acted as software developers.

For the project we had to meet with a real company and develop a piece of software that they would use in the real world. We decided that we wanted to work with Trocaire as it was nice to work with a charity Organisation, especially an Irish one.

Trocaire wanted an app that could be used to gain information on Fall Armyworm attacks, both how to prevent them and how to react to them. They also wanted a feature that would allow farmers to report infestations so that NGOs could go out and help the farmers.

The final app contained all the features that Trocaire wanted. The map feature allows users to pin point their exact location on the map and makes it much easier for help to find them. We used Google's map API to implement this feature. The information feature allows farmers to gain valuable insight on how to prevent infestations and what to do in the unfortunate event of one. The report feature allows farmers to report an infestation and get help from an NGO.

This project taught me a lot about working in teams and also thinking outside the box. For example, the target audience for this app were farmers in Africa and because of this we had to consider what type of phones and internet access they would have and adjusted accordingly. I really enjoyed working with a large company to bring together a piece of software that they were satisfied with.`,
    tech: ['Android', 'Java', 'Google Maps API', 'SQL', 'Python'],
    images: [
      '/images/projects/trocaire1.PNG',
      '/images/projects/trocaire2.PNG',
      '/images/projects/trocaire3.PNG',
    ],
    featured: true,
    date: '2019',
    links: {},
  },
  {
    id: 'federated-learning',
    title: 'Pneumonia Detection with AI',
    slug: 'federated-learning',
    category: 'ai',
    description: 'Machine learning system using CNN and MLP to detect pneumonia in chest X-rays with 99% accuracy.',
    longDescription: `While on my Erasmus in Sweden I took a module in Artificial Intelligence and Machine Learning. For this module we had to create an intelligent system. We had free reign to do whatever project we wanted. Another student and I decided to team up and create an intelligent system that could detect the presence of pneumonia in a chest x-ray.

To do this we used two types of neural networks; Multi-Layer Perceptron (MLP) and Convoluted Neural Network (CNN).

To train the systems we first needed to get some data. We used a dataset from Kaggle, the world's largest data science community. Here we were able to get a dataset full of x-rays which were broken into having pneumonia and not having pneumonia. After we had this it was time to train. We simply gave the systems many pictures and they started to spot trends and from here they were able to classify.

The results showed that the CNN has a 0.4% error rate and the system was able to predict correctly the absence or presence of pneumonia with over 99% accuracy.

This was an extremely fun and interesting project. Although I would not consider myself an expert just yet I believe that this project has set me up well for the next time I encounter Artificial Intelligence.`,
    tech: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'CNN', 'MLP', 'Kaggle'],
    images: [
      '/images/projects/mlp.PNG',
      '/images/projects/cnn.PNG',
      '/images/projects/accuracy.PNG',
      '/images/projects/res.PNG',
    ],
    featured: true,
    date: '2020',
    links: {},
  },
  {
    id: 'ipposi',
    title: 'IPPOSI Jury Selection System',
    slug: 'ipposi-jury',
    category: 'ai',
    description: 'Python script for optimal jury selection representing Irish population demographics across 6 criteria.',
    longDescription: `The premise of this project was that IPPOSI (Irish Platform for Patient Organisations, Science and Industry) needed a jury of 25 people to deliberate on whether or not we should share our personal data for the betterment of healthcare.

I was the software consultant of the team and it was my job to take all the potential jury candidates and create a jury of 25 people, such that they would represent the Irish population according to the last census report. In total there were 6 criteria that needed to be considered when making the jury.

The criteria included age distribution, gender, ethnicity, province, education background and opinion. There were over a thousand candidates so to select the jury I created a Python script that would pick a jury based on the criteria needed. I was careful when creating this script to avoid positive discrimination.

I learned a lot from this project. It was a great opportunity to work on a real world project. This taught me how to act professionally, how to conduct myself in a proper manner and improved my communication skills. I now feel more confident going into real world projects.`,
    tech: ['Python', 'Data Science', 'Statistics', 'PowerBI'],
    images: [
      '/images/projects/agesire.PNG',
    ],
    featured: true,
    date: '2021',
    links: {
      report: 'https://www.ipposi.ie/wp-content/uploads/2021/09/IPPOSI_CJury_Full_Report_06092021.pdf',
    },
  },
];

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};
