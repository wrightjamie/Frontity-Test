const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "http://localhost/wordpress/wp-json",
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
          "api": "http://localhost/wordpress/wp-json",
        },
        theme: {
          isUrlVisible: true,
          css: {
            colors: {
              white: "#FFF",
              red: "#C60C30",
              blue: "#002F5F",
              heading: "#31639E",
              text: "#1B3257",
              light: "#b7cbe2",
              accent: "rgb(255,217,17)",

            }
          },
          social: [
            ["Contact Us", "mail", "/contact/"],
            ["Call Us", "phone", "tel:07764481541"],
            ["Find Us", "pin", "/find-us/"],
            ["Facebook", "facebook", "http://facebook.com"],
            ["Twitter", "twitter","http://twitter.com"]
          ],
          menu: [
            ["Home","/"],
            ["More posts","/page/2"],
            ["About Us","/about-us"],
            ["Destinations","/destinations"],
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
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
