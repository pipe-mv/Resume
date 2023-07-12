import { Technologies } from "./TechnoIcons";

const ProjectsDb = [
  {
    id: 1,
    name: "Music Player",
    description:
      "The Music Player app will allow the user to search and play the video of any song. Additionally it will allow the users to save theirs favorite songs in a carousel easy to scroll and search for the favorite song once it is saved!",
    // technologies: ["REACT", "CSS3", "JAVASCRIPT", "HTML5", "NODEJS"],
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Custom Hooks",
      "Dotenv",
      "React Router",
      "Lodash",
      "Slick-carousel",
      "Framer Motion",
      "YouTube API",
      "The audioDB API",
      "Lyricsovh API",
      "Github-Pages",
      "Local Storage",
      "Styled Components",
    ],
    image: require("../assets/MusicPlayer.png"),
    date: "05 / 04 / 2022",
    link_repository: "https://github.com/pipe-mv/MusicPlayer",
    link_website: "https://pipe-mv.github.io/MusicPlayer/",
  },
  {
    id: 2,
    name: "Task Planner",
    description:
      "This repository contains the code for a wall where you can write, edit and delete a 'tasks'.",
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Emotion CSS",
      "Bootstrap",
      "Github-Pages",
    ],
    image: require("../assets/Task-Planner.JPG"),
    date: "20 / 06 / 2023",
    link_repository: "https://github.com/pipe-mv/Task-Planner.git",
    link_website: "https://pipe-mv.github.io/Task-Planner/",
  },
  {
    id: 3,
    name: "To Do List",
    description:
      "This repository contains the code for a wall where you can write, edit and delete a 'to do list'.",
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Emotion CSS",
      "Material UI",
      "Github-Pages",
      "Styled Components",
    ],
    image: require("../assets/ToDoList.png"),
    date: "24 / 12 / 2020",
    link_repository: "https://github.com/pipe-mv/to-do-list",
    link_website: "https://pipe-mv.github.io/to-do-list/",
  },
  {
    id: 4,
    name: "Ideas Board",
    description:
      "This is an idea board with a pre-built back-end server where you can temporally save the users' id and password plus every user is able to add, edit and delete ideas from the board by selecting the user's link.",

    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Custom Hooks",
      "Node Server.js",
      "React Router",
      "Local Storage",
      "Bootstrap",
      "Font Awesome Icons",
      "Concurrently",
      "Express",
      "Github-Pages",
      "Styled Components",
    ],
    image: require("../assets/IdeasBoard.png"),
    date: "24 / 12 / 2020",
    link_repository: "https://github.com/pipe-mv/ideas-board",
    link_website: "https://ideas-board-felmv.netlify.app",
  },
  {
    id: 5,
    name: "Tic Tac Toe",
    description:
      "This repository contains the code for existing tic-tac-toe game programming in JavaScript using React.",

    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Custom Hooks",
      "Github-Pages",
      "Local Storage API",
      "Styled Components",
    ],
    image: require("../assets/TicTacToe.png"),
    date: "24 / 12 / 2020",
    link_repository: "https://github.com/pipe-mv/tic-tac-toe",
    link_website: "https://pipe-mv.github.io/tic-tac-toe/",
  },
  {
    id: 6,
    name: "Film Library",
    description:
      "This is a repo that houses the base code for a React.js film application. By the final stage of the project, the film app will have a list of all the recent popular movies; a user can scroll through them, click one for more details, and save it to their favorites.",
    technologies: [
      Technologies.JAVASCRIPT,
      Technologies.REACT,
      Technologies.NODEJS,
      Technologies.HTML5,
      Technologies.CSS3,
    ],
    concepts: [
      "Custom Hooks",
      "React Router",
      "Dotenv",
      "Axios",
      "Cors",
      "Express",
      "Nodemon",
      "TMDB API",
      "Github-Pages",
      "Styled Components",
    ],
    image: require("../assets/FilmLibrary.png"),
    date: "24 / 12 / 2020",
    link_repository: "https://github.com/pipe-mv/film-library",
    link_website: "https://pipe-mv.github.io/film-library/",
  },
  // {
  //   id: 6,
  //   name: "The Keeper App",
  //   description:
  //     "This is a repo that houses the base code for a React.js application. The Keeper App is a place where yo can make so a variety of of activities from shoping list, take notes to brainstorming for projects. The user is able to add, edit and delete its titles and main content of any of the or list or ideas at any time!",
  //   technologies: [
  //     Technologies.JAVASCRIPT,
  //     Technologies.REACT,
  //     Technologies.NODEJS,
  //     Technologies.HTML5,
  //     Technologies.CSS3,
  //   ],
  //   concepts: [
  //     "Material UI",
  //     "Material UI-Icons",

  //     "Github-Pages",

  //     "Styled Components",
  //   ],
  //   image: require("../assets/TheKeeperApp.png"),
  //   date: "24 / 12 / 2020",
  //   link_repository: "https://pipe-mv.github.io/the-keeper-notes-app/",
  //   link_website: "https://pipe-mv.github.io/the-keeper-notes-app/",
  // },
];

export default ProjectsDb;
