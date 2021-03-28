const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "http://localhost/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://localhost/wordpress",
        },
        wpSource: {
          prefix: "/wp-json",
        },
        theme: {
          isUrlVisible: true,
          css: {
            colors: {
              white: "rgb(255,255,255)",
              red: "rgb(198,12,48)",
              blue: "rgb(0,47,95)",
              heading: "rgb(49,99,158)",
              text: "rgb(27,50,87)",
              light: "rgb(183,203,226)",
              accent: "rgb(255,217,17)",

            }
          },
          menus: {
            bottomLinks: [
              ["Call Us", "phone", "tel:07764481541"],
              ["Find Us", "pin", "/find-us/"],
              ["Join Us", "people", "/join-us/"]
            ],
            social: [
              ["Contact Us", "mail", "/contact/"],
              ["Facebook", "facebook", "http://facebook.com"],
              ["Twitter", "twitter", "http://twitter.com"],
            ],
            menu: [
              ["Home", "/"],
              ["More posts", "/page/2"],
              ["About Us", "/about-us"],
              ["Destinations", "/destinations"],
            ],
            external: [
              ["Royal Air Force", "http://raf.mod.uk/"],
              ["RAF Air Cadets", "http://raf.mod.uk/aircadets"],
              ["North Region", "http://raf.mod.uk/aircadets"],
            ],
            useful: [
              ["Cadet Portal", "http://cadets.bader.mod.uk"],
              ["Ultilearn", "http://learning.bader.mod.uk"],
            ]
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
