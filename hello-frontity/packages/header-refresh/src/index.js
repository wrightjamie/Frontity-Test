import Root from "./components"
import link from "@frontity/html2react/processors/link"

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      css: {
        colors: {
          dark: "rgb(4,16,40)",
          white: "rgb(255,255,255)",
          red: "rgb(198,12,48)",
          blue: "rgb(0,47,95)",
          heading: "rgb(49,99,158)",
          text: "rgb(27,50,87)",
          light: "rgb(183,203,226)",
          accent: "rgb(255,217,17)",
        }
      },
      enum: {
        topTolerance: 50,
        bottomTolerance: 50,
        pinnedStates: {
          PINNED: "pinned",
          TEMP: "temp",
          HIDDEN: "hidden",
          AUTO: "auto"
        },
        positionStates: {
          TOP: "top",
          MID: "middle",
          BOTTOM: "bottom"
        },
        scrollDirStates: {
          UP: "up",
          DOWN: "down",
          NONE: "none"
        }
      },
      modals: {
        search: false,
        menu: false
      },
      scroll: {
        currentPos: null,
        prevPos: null,
        hide: false,
        pinnedState: "auto",
        scrollDir: "none",
        position: "top",
        stickyHeader: true
      },
      menus: {
        social: [],
        menu: [],
        bottomLinks: [],
      },

    },
  },
  actions: {
    theme: {
      scroll: ({ state }) => {
        const { pinnedStates , scrollDirStates , positionStates } = state.theme.enum

        const pinnedState = state.theme.scroll.pinnedState
        const dir = state.theme.scroll.scrollDir

        //OverRide if a modal is shown:
        if(state.theme.modals.menu){
          //state.theme.scroll.hide = false
          //return;
        }

        switch (pinnedState) {
          case pinnedStates.TEMP: //Temporary shown
            state.theme.scroll.pinnedState = pinnedStates.AUTO
            state.theme.scroll.hide = false
            break;
          case pinnedStates.HIDDEN: //Pinned hide
            state.theme.scroll.hide = true
            break;
          case pinnedStates.PINNED: //Pinned show
            state.theme.scroll.hide = false
            break;
          case pinnedStates.AUTO: //Automatic
            const position = state.theme.scroll.position
            switch (position) {
              case positionStates.TOP:
                state.theme.scroll.hide = false
                break;
              case positionStates.BOTTOM:
                state.theme.scroll.hide = false
                break;
              case positionStates.MID:
                state.theme.scroll.hide = ( dir == scrollDirStates.DOWN ? true : false )
            }
        }
      },
      togglePinHeaders: ({ state, actions }) => {
        const { pinnedStates } = state.theme.enum
        switch (state.theme.scroll.pinnedState) {
          case pinnedStates.PINNED:
            state.theme.scroll.pinnedState = pinnedStates.AUTO
                break;
          default:
            state.theme.scroll.pinnedState = pinnedStates.PINNED
          }
        actions.theme.scroll()
      },
      pinHeaders: ({ state, actions }) => {
        state.theme.scroll.pinnedState ="pinned"
        actions.theme.scroll()
      },
      tempShowHeaders: ({ state, actions }) => {
        state.theme.scroll.pinnedState ="temp"
        actions.theme.scroll()
      },
      hideHeaders: ({ state, actions }) => {
        state.theme.scroll.pinnedState ="hidden"
        actions.theme.scroll()
      },
      autoHeaders: ({ state, actions }) => {
        state.theme.scroll.pinnedState ="auto"
        actions.theme.scroll()
      },
      toggleShowMenu: ({ state , actions }) => {
        actions.theme.tempShowHeaders()
        state.theme.modals.menu = !state.theme.modals.menu
        console.log(state.theme.modals.menu)
      },
      closeOverlay: ({ }) => {
        console.log("CloseOverlay")
      }
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default myFirstTheme
