export const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "#F2F4F7",
      minHeight: "100vh",
      overflowX: "hidden",
      backgroundColor: "#485461",
      backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
      backgroundRepeat: "no-repeat",
    },
    "h1, h2, h3, h4, h5": {
      fontFamily: "Satoshi, sans-serif",
    },
    a: {
      textDecoration: "none !important",
      _hover: {
        opacity: ".8",
        // textDecoration: 'underline',
      },
    },
    ".hideSB": {
      overflowY: "scroll",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    ".hideSB::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
    ".thinSB::-webkit-scrollbar": {
      width: "9px",
      height: "7px",
    },
    ".thinSB::-webkit-scrollbar-thumb": {
      backgroundColor: "#7489AA30",
      // outline: "1px solid #7489AA",
      borderRadius: "5px",
    },
    ".thinSB::-webkit-scrollbar-track": {
      // boxShadow: "inset 0 0 4px rgba(0,0,0,0.2)",
      // backgroundColor: "#00000010",
    },
    ".thinSB": {
      scrollbarColor: "rgb(210,210,210, 0) rgb(46,54,69 0.5)",
      scrollbarWidth: "thin",
    },
  },
};
