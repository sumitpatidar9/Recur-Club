// data.js
const navList = [
  {
    _id: 1,
    name: "Profile",
    icon: "bi bi-person",
    path: "/profile", // Added path
  },
  // {
  //   _id: 2,
  //   name: "Contact",
  //   icon: "bi bi-envelope",
  //   path: "/contact", // Added path
  // },
  {
    _id: 3,
    name: " New Registration",
    icon: "bi bi-card-list",
    path: "/register", // Added path
  },

  // {
  //   _id: 5,
  //   name: "Setting",
  //   icon: "bi bi-gear",
  //   path: "/settings", // Added path
  // },
  // {
  //   _id: 6,
  //   name: "F.A.Q",
  //   icon: "bi bi-question-circle",
  //   path: "/faq", // Added path
  // },
  // {
  //   _id: 7,
  //   name: "Blank",
  //   icon: "bi bi-file-earmark",
  //   path: "/blank", // Added path
  // },
];

const navItems = [
  {
    id: 1,
    title: "Monitor Readings",
    icon: "bi bi-speedometer2",
    path: "/monitoring", // Added path
  },
  {
    id: 2,
    title: "Image results",
    icon: "bi bi-images",
    path: "/imageresults", // Added path
  },
  {
    id: 3,
    title: "Complaints",
    icon: "bi bi-exclamation-circle",
    path: "/complaints", // Added path
  },
  {
    id: 4,
    title: "Data Visualization",
    icon: "bi bi-graph-up",
    path: "/datavisualization", // Added path
  },
  {
    id: 5,
    title: "Staff Reports",
    icon: "bi bi-file-earmark-text",
    path: "/staffreports", // Added path
  },
  {
    id: 6,
    title: "Sensors Locations",
    icon: "bi bi-geo-alt",
    path: "/sensorslocations", // Added path
  },
];




const staffnavs = [
  {
    id: 1,
    title: "Profile",
    icon: "bi bi-person",
    path: "/profile",
  },
  {
    id: 2,
    title: "Post Test",
    icon: "bi bi-exclamation-circle",
    path: "/postTest",
  },
  {
    id: 3,
    title: "Records",
    icon: "bi bi-file-earmark-text",
    path: "/pastrecords",
  },
];

export { navList, navItems ,staffnavs };
