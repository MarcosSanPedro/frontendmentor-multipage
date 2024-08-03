interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
  }
  
  interface ProjectCategories {
    webDesign: Project[];
    appDesign: Project[];
    graphicDesign: Project[];
  }
  
  export const projects: ProjectCategories = {
    webDesign: [
      { id: 1, image: '/cards/image-express.jpg', title: 'EXPRESS', description: 'A multi-carrier shipping website for ecommerce businesses' },
      { id: 2, image: '/cards/image-transfer.jpg', title: 'TRANSFER', description: 'Site for low-cost money transfers and sending money within seconds' },
      { id: 3, image: '/cards/image-photon.jpg', title: 'PHOTON', description: 'A state-of-the-art music player with high-resolution audio and DSP effects' },
      { id: 4, image: '/cards/image-builder.jpg', title: 'BUILDER', description: 'Connects users with local contractors based on their location' },
      { id: 5, image: '/cards/image-blogr.jpg', title: 'BLOGR', description: 'Blogr is a platform for creating an online blog or publication' },
      { id: 6, image: '/cards/image-camp.jpg', title: 'CAMP', description: 'Get expert training in coding, data, design, and digital marketing' },
     
    ],
    appDesign: [
      { id: 1, image: '/cards/image-airfilter.jpg', title: 'AIRFILTER', description: 'Solving the problem of poor indoor air quality by filtering the air' },
      { id: 2, image: '/cards/image-eyecam.jpg', title: 'EYECAM', description: 'Product that lets you edit your favorite photos and videos at any time' },
      { id: 3, image: '/cards/image-faceit.jpg', title: 'FACEIT', description: 'Get to meet your favorite internet superstar with the faceit app' },
      { id: 4, image: '/cards/image-todo.jpg', title: 'TODO', description: 'A todo app that features cloud sync with light and dark mode' },
      { id: 5, image: '/cards/image-loopstudios.jpg', title: 'LOOPSTUDIOS', description: 'A VR experience app made for Loopstudios' },
    ],
    graphicDesign: [
      { id: 1, image: '/cards/image-change.jpg', title: 'TIM BROWN', description: 'A book cover designed for Tim Brown’s new release, ‘Change’' },
      { id: 2, image: '/cards/image-boxed-water.jpg', title: 'BOXED WATER', description: 'A simple packaging concept made for Boxed Water' },
      { id: 3, image: '/cards/image-science.jpg', title: 'SCIENCE!', description: 'A poster made in collaboration with the Federal Art Project' },
    ]
  };