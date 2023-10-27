module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        accent1:"hsl(233, 47%, 7%)",
        accent2: "hsl(244, 38%, 16%)",
        accent3: "hsl(277, 64%, 61%)",
        Twhite: "hsla(0, 0%, 100%, 0.75)",
        Twhite2: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        body:['Inter'],
      },
    },
  },
  plugins: [],
}

