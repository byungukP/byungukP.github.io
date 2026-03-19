// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV updated in March 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-bioinspired-design-rules-for-flipping-across-the-lipid-bilayer-from-systematic-simulations-of-membrane-protein-segments-is-now-published-in-the-msde",
          title: 'Bioinspired design rules for flipping across the lipid bilayer from systematic simulations of...',
          description: "",
          section: "News",},{id: "news-i-m-looking-forward-to-giving-an-poster-presentation-at-the-2025-mtsm-in-madison",
          title: 'I’m looking forward to giving an poster presentation at the 2025 MTSM in...',
          description: "",
          section: "News",},{id: "news-i-m-looking-forward-to-giving-an-oral-presentation-at-the-2025-aiche-annual-meeting-in-boston",
          title: 'I’m looking forward to giving an oral presentation at the 2025 AIChE Annual...',
          description: "",
          section: "News",},{id: "news-masif-pmp-is-now-published-in-the-journal-of-chemical-information-and-modeling",
          title: 'MaSIF-PMP is now published in the Journal of Chemical Information and Modeling!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "talks-mechanistic-and-thermodynamic-characterization-of-dynamic-topology-in-an-unassembled-transmembrane-protein",
          title: 'Mechanistic and thermodynamic characterization of dynamic topology in an unassembled transmembrane protein',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/aiche2024.html";
            },},{id: "talks-mechanistic-and-thermodynamic-characterization-of-dynamic-topology-in-an-unassembled-transmembrane-protein",
          title: 'Mechanistic and thermodynamic characterization of dynamic topology in an unassembled transmembrane protein',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/quentin_invited.html";
            },},{id: "talks-integrating-geometric-deep-learning-and-high-throughput-molecular-simulations-to-predict-protein-membrane-binding-interfaces",
          title: 'Integrating Geometric Deep Learning and High-Throughput Molecular Simulations to Predict Protein-Membrane Binding Interfaces...',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/jessi_invited.html";
            },},{id: "talks-aiche-2025",
          title: 'AIChE 2025',
          description: "",
          section: "Talks",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%70%61%72%6B%37%34@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/byunguk-park-5a15a622a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TUZ7Z7QAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/byungukP", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
