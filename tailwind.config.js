 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,vue}","./public/*.html"],
  theme: {
    extend: {
      spacing: {
        "13": "52px",
        "21": "84px",
        "55": "220px",
        "42": "168px",
        "63": "252px",
      },
      maxWidth: {
        "51": "204px",
        "wrapper-326": "326px",
        "wrapper-343": "343px",
        "wrapper-350": "350px",
        "wrapper-468": "468px",
        "wrapper-510": "510px",
        "wrapper-572": "572px",
        "wrapper-824": "824px",
      },
      colors:
      {
        "primary" : "#001429",
        "secondary" : "#216CF6",
        "placeholder" : "#A3A3A3",
        "text" : "#637381",
        "button" : "#F25A38",
        "button-hover" : "#EB350C",
        "text2" : "#666666",
        "offer" : "#F6FA47",
        "background" : "#2C4047",
        "Cold-Blue-600" : "#015AFF",
        "offer2" : "#8EE69D",
        "error" : "#FF0000",
        "prefilled" : "#F3FAFF",
      },
      fontFamily:
      {
        "primary" : "Inter",
        "secondary" : "Nunito",
      },
      fontSize: {
        "10": "10px",
        "22": "22px",
        "26": "26px",
        "32": "32px",
        "42": "42px",
        "64": "64px",
      },
      letterSpacing: {
        "1": "0.01em",
      },
      lineHeight: {
        "18": "18px",
        "35": "35px",
        "42": "42px",
        "48": "48px",
        "56": "56px",
      },
      borderRadius: {
        '10': '10px',
      },
      boxShadow: {
        'shprimary': '0px 4px 16px #CCCCCC',
      },
      keyframes: {
        loop1: {
          "0%, 100%": {transform: "scale(1)" }, // w-7
          "50%": {transform: "scale(0.42)" }, // w-3
        },     
      },
      animation: {
        loop1: "loop1 1.5s infinite ease-in-out",
      },
      backgroundImage: {
        'grprimary': 'linear-gradient(304deg, #F9FAFB 35.76%, #FFF 76.84%)',
        'grsecondary': 'linear-gradient(310deg, #DBE8FF 3.6%, #F9FAFB 37.88%)',
      },
    },
  },
  plugins: [],
}