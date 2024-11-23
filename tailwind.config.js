/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#006241",
        secondary: "#D4E9E2",
        tertiary: "#1E3932",
        accent: "#00754A",
        hover: " #158159",
        paymentColor: "#F2F0EB",
        faqColour: "#F9F9F9",
        idk: "#F1F8F5",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        mobile:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../IMG/hero-mobile_2021.jpg')",
        desktop:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../IMG/desk.webp')",
        green:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../IMG/green.jpg')",
      },
    },
  },
  plugins: [],
};

