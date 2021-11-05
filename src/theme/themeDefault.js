const globalVars = {
  // markPro: `"Mark Pro", sans-serif`,
  openSans: `"Open Sans", sans-serif`,
  heaters: `"Heaters", sans-serif`,
  draftNatural: `"Draft Natural", sans-serif`,
  // Font weights
  fontThin: 100,
  fontExtraLight: 200, // Extra Light, Ultra Light
  fontLight: 300,
  fontRegular: 400, // Normal, Book, Regular
  fontMedium: 500,
  fontSemiBold: 600, // Semi Bold, Demi Bold
  fontBold: 700,
  fontExtraBold: 800, // Extra Bold, Ultra Bold
  fontBlack: 900, // Black, Heavy
  // Colors
  white: "#ffffff",
  black: "#000000",
  silver: "#cccccc",
  outerSpace: "#2d3538",
  goldenTainoi: "#ffcd54",
  charade: "#292933",
  creamCan: "#F4D15D",
  alabaster: "#F9F9F9",
  grayNickel: "#C5C6C2",
  mustard: "#FFD253",
  mirage: "#171726",
  red: "#E01100",
  codGray: "#1A1A1A",
  midGray: "#6D6D71",
  titanWhite: "#FEFEFF",
  steelGray: "#191926",
  goldenrod: "#FBD15E",
  goldenrod2: "#FBCE5D",
  kabul: "#655146",
  balticSea: "#1B1A1F",
  tuna: "#3e3e49",
  tulipTree: "#EFAF3F",
  anzac: "#E3B150",
}

const themeDefault = {
  themeName: "Default Theme",
  // Font
  font: globalVars.openSans,
  palette: {
    // BG Color
    bgColor: globalVars.white,
    textColor: globalVars.black,
    // Colours
    primary: globalVars.white,
  },
  vars: globalVars,
  awesomegrid: {
    mediaQuery: "only screen",
    columns: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 12,
      xl: 12,
    },
    gutterWidth: {
      xs: 0.75,
      sm: 1.5,
      md: 1.5,
      lg: 1.5,
      xl: 1.5,
    },
    paddingWidth: {
      xs: 1,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 0,
    },
    container: {
      xs: "full", // 'full' = max-width: 100%
      sm: 40.5, // width = 648px
      md: 56.5, // width = 904px
      lg: 68.3125, // width = 1093px
      xl: 90, // width = 1440px
      // xl: 120, // max-width: 1920px
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 85, // 1360px
      xl: 120, // 1920px
    },
  },
}

module.exports = themeDefault
