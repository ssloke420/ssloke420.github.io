/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   ============================================================
   This is the only file you need to touch. Change the text
   inside the quotes below, save, and refresh the page (or push
   to GitHub) to see your updates. Don't touch index.html or
   style.css unless you want to change the design itself.

   RULES:
   - Keep the quotes "" around text.
   - Keep the commas , at the end of each line inside { }.
   - To add a new project or award, copy an existing block
     (the part between { and }) and paste it, then edit it.
   - To remove a project or award, delete its whole block
     (from { to }, including the comma after it).
   ============================================================ */

const PORTFOLIO_DATA = {

  // ----------------------------------------------------------
  // 1. ABOUT YOU
  // ----------------------------------------------------------
  about: {
    name: "Shlok Shah",
    role: "Student",
    tagline: "Building things, learning as I go.",

    // A few short lines about yourself. Each line in quotes
    // becomes its own paragraph. Add or remove lines freely.
    bio: [
      "I'm a student interested in building software and exploring how things work under the hood.",
      "This site is where I keep track of what I'm working on and what I've learned along the way."
    ],

    // Where you currently study / work. Leave as "" to hide.
    affiliation: "",

    // Where you're based. Leave as "" to hide.
    location: "",

    // Contact / social links. Set "url" to "" to hide a link
    // without deleting it (useful if you don't have one yet).
    links: [
      { label: "Email",    url: "mailto:shlok@example.com" },
      { label: "GitHub",   url: "" },
      { label: "LinkedIn", url: "" }
    ]
  },

  // ----------------------------------------------------------
  // 2. PROJECTS
  // ----------------------------------------------------------
  // status options: "In progress", "Completed", "Paused"
  // tags: short skill/tech labels, as many or few as you like
  // link: project URL, or "" if there isn't one yet
  projects: [
    {
      title: "Project Name Here",
      status: "In progress",
      period: "2026",
      description: "One or two sentences on what this project is and what it does.",
      tags: ["Python", "APIs"],
      link: ""
    },
    {
      title: "Another Project",
      status: "Completed",
      period: "2025",
      description: "What problem it solved, what you built, what you learned.",
      tags: ["JavaScript", "Web"],
      link: ""
    }
  ],

  // ----------------------------------------------------------
  // 3. AWARDS & ACHIEVEMENTS
  // ----------------------------------------------------------
  // Set showAwards to false to hide this whole section.
  // Leave the awards list empty ([]) and it will also hide
  // itself automatically.
  showAwards: false,
  awards: [
    // {
    //   title: "Award Name",
    //   issuer: "Organization",
    //   year: "2026",
    //   description: "One line on what this was for."
    // }
  ]

};
