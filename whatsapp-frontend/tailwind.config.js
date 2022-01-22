module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      height: (theme) => ({
        "90v": "90vh",
      }),

      width: (theme) => ({
        "90v": "90vw",
      }),

      margin:{
        '2vw':'2vw',
      },

      flexBasis: {
        "sidebar-width": "30%",
        "chatbar-width": "70%",
      },
      
      minWidth: {
        '10vw':'10vw',
      },
  
      colors: {
        "whatsapp-bg": "#dadbd3",
        "whatsapp-body-bg": "#ededed",
      },

      backgroundImage:{
        
      }
    },

    
  },
  plugins: [],
};
