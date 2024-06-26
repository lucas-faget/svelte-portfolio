import { P as PUBLIC_ASSETS_BASE_URL, a as PUBLIC_ICONS_PATH, b as PUBLIC_LOGOS_PATH, c as PUBLIC_LANGUAGES_PATH, d as PUBLIC_SCREENSHOTS_PATH } from "../../../chunks/public.js";
const overview = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.\nUt velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.";
const skills = [
  {
    headline: "front-end",
    languages: [
      {
        name: "Javascript",
        imageFile: "javascript.svg",
        rating: 3
      },
      {
        name: "Typescript",
        imageFile: "typescript.svg",
        rating: 3
      },
      {
        name: "Vue.js - Nuxt",
        imageFile: "vuejs.svg",
        rating: 2
      },
      {
        name: "Svelte - SvelteKit",
        imageFile: "svelte.svg",
        rating: 2
      },
      {
        name: "React",
        imageFile: "react.svg",
        rating: 1
      }
    ]
  },
  {
    headline: "back-end",
    languages: [
      {
        name: "PHP",
        imageFile: "php.svg",
        rating: 3
      },
      {
        name: "Symfony",
        imageFile: "symfony.svg",
        rating: 1
      },
      {
        name: "Laravel",
        imageFile: "laravel.svg",
        rating: 1
      },
      {
        name: "C# - ASP.Net Core",
        imageFile: "c_sharp.svg",
        rating: 1
      },
      {
        name: "Node.js",
        imageFile: "nodejs-white.svg",
        rating: 1
      }
    ]
  },
  {
    headline: "base de données",
    languages: [
      {
        name: "MySQL",
        imageFile: "mysql.svg",
        rating: 3
      },
      {
        name: "PostgreSQL",
        imageFile: "postgresql.svg",
        rating: 2
      },
      {
        name: "MongoDB",
        imageFile: "mongodb.svg",
        rating: 1
      }
    ]
  },
  {
    headline: "Autres outils",
    languages: [
      {
        name: "Git",
        imageFile: "git.svg",
        rating: 3
      },
      {
        name: "Linux",
        imageFile: "linux.svg",
        rating: 1
      },
      {
        name: "Docker",
        imageFile: "docker.svg",
        rating: 1
      }
    ]
  }
];
const workExperience = [
  {
    title: "Alternant développeur web",
    companyName: "Simpliciti",
    companyImageFile: "simpliciti.png",
    date: "juil. 2022 - sept. 2023",
    place: "Lormont (33310)",
    overview: "Développement de fonctionnalités et maintenance de EcoboxCarto: Application web d'optimisation de circuits de collecte\nSIG / PHP / JS / MySQL / PostgreSQL\nGestion de projet (SCRUM, Git, EasyRedmine)",
    languages: [
      {
        name: "PHP",
        imageFile: "php.svg"
      },
      {
        name: "Javascript",
        imageFile: "javascript.svg"
      },
      {
        name: "MySQL",
        imageFile: "mysql.svg"
      },
      {
        name: "PostgreSQL",
        imageFile: "postgresql.svg"
      }
    ]
  },
  {
    title: "Stage en développement web",
    companyName: "Audit Action plus",
    companyImageFile: "audit_action_plus.png",
    place: "Toulouse",
    date: "juin 2021 - aout 2021",
    overview: "Développement d'un ERP\nPHP / JS / MySQL",
    skills: [
      {
        name: "PHP",
        imageFile: "php.svg"
      },
      {
        name: "Javascript",
        imageFile: "javascript.svg"
      },
      {
        name: "MySQL",
        imageFile: "mysql.svg"
      }
    ]
  }
];
const education = [
  {
    title: "Licence pro DAWIN en alternance",
    schoolName: "IUT de Bordeaux",
    imageFile: "collections/elegant-circle/global.svg",
    date: "2023",
    overview: "Licence professionelle de développement web en alternance\nDAWIN = Développement en applications web et innovation numérique"
  },
  {
    title: "DUT en Informatique",
    schoolName: "IUT de Toulouse",
    imageFile: "collections/elegant-circle/computer.svg",
    date: "2021"
  },
  {
    title: "Licence de Physique",
    schoolName: "Université de Pau",
    imageFile: "collections/elegant-circle/genius.svg",
    date: "2019"
  }
];
const data = {
  overview,
  skills,
  workExperience,
  education
};
const load = () => {
  return {
    assetsBaseUrl: PUBLIC_ASSETS_BASE_URL,
    iconsPath: PUBLIC_ICONS_PATH,
    logosPath: PUBLIC_LOGOS_PATH,
    languagesPath: PUBLIC_LANGUAGES_PATH,
    screenshotsPath: PUBLIC_SCREENSHOTS_PATH,
    json: data
  };
};
export {
  load
};
