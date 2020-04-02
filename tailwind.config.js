module.exports = {
  theme: {
    screens: {
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "xxs-max": { max: "419.98px" },
      "xs-max": { max: "575.98px" },
      "sm-max": { max: "767.98px" },
      "md-max": { max: "991.98px" },
      "lg-max": { max: "1198.98px" },
      "xxs-only": { min: "0px", max: "419.98px" },
      "xs-only": { min: "420px", max: "575.98px" },
      "sm-only": { min: "576px", max: "767.98px" },
      "md-only": { min: "768px", max: "991.98px" },
      "lg-only": { min: "992px", max: "1198.98px" }
    },
    extend: {
      margin: {
        "20px": "20px"
      },
      padding: {
        "20px": "20px"
      },
      lineHeight: {
        "1.6": "1.6"
      },
      colors: {
        primary: {
          dark: "#258984",
          default: "#38B2AC"
        },
        "gray-dark": "#434343",
        dark: "#202020",
        darker: "#141618",
        white: "#ffffff"
      }
    }
  },
  variants: {},
  plugins: []
}
