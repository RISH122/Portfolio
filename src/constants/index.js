import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    mysql,
    nodejs,
    mongodb,
    git,
    C,
    CC,
    meta,
    LifeNav,
    NameIt,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Problem Solver",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competative Programming Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "C++",
      icon: CC,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Life Navigatours Website",
      company_name: "Full Stack Project",
      icon: LifeNav,
      link: 'http://life-navigatour.onrender.com/',
      iconBg: "#383E56",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Developed a dynamic website offering travel and adventure packages across India.",
        "Implemented a user-friendly interface using Pug, with Node.js and Express for backend, and MongoDB for data storage.",
        "Created custom APIs to handle data interactions and enhance the functionality of the website.",
        "Integrated JWT token authentication to ensure secure user access and protect sensitive information.",
      ],
    },
    {
      title: "Nameit",
      company_name: "React Project",
      icon: NameIt,
      link: 'https://rish122.github.io/NameIt/',
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Aug 2023",
      points: [
        "Developed using React.js and other related technologies.",
        "used @rstacruz/startup-name-generator for generating startup names.",
        "Integrated an API to check domain availability and pricing, with redirection to Namecheap.",
      ],
    },
    {
      title: "Other Projects",
      company_name: "Javascript,React implementation",
      icon: shopify,
      link: 'https://github.com/RISH122',
      iconBg: "#383E56",
      date: "Jan 2023 - Jul 2023",
      points: [
        "Developed a To-Do List application using HTML, CSS, JavaScript, and React, featuring task management and local storage.",
        "Created a Color Picker tool with a dynamic interface for selecting and previewing colors, including a color palette feature.",
        "Built a Fighting Game with React, implementing game mechanics, animations, and sound effects for an immersive experience."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LeetCode",
      description:
        "Placed inside the top 10%, completed over 300 DSA Problems, and maintained a 30-plus-day streak of daily problem-solving and Earned August and 100 days badges on LeetCode",
      tags: [
        {
          name: "Rating: 1750+",
          color: "blue-text-gradient",
        },
        {
          name: "4 Badges",
          color: "green-text-gradient",
        },
        {
          name: "100 days Badge",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://leetcode.com/u/RishD789/",
    },
    {
      name: "CodeChef",
      description:
        "Achieved a 4-star rating with a maximum rating of 1833,Secured a global rank of 134 in Starter 130 Division 2, Participated in 20+ coding contests,Solved 100+ Coding and DSA Problem.",
      tags: [
        {
          name: "Rated 4 Star",
          color: "blue-text-gradient",
        },
        {
          name: "Rating: 1833",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.codechef.com/users/rish122",
    },
    {
      name: "GFG",
      description:
        "solved over 300 data structures and algorithms problems. My commitment to improving my skills is evident in my daily-solving streak, which I have upheld for over 60 days.",
      tags: [
        {
          name: "60+ days streak",
          color: "blue-text-gradient",
        },
        {
          name: "400+ Problems",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.geeksforgeeks.org/user/rishidu6qnw/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };