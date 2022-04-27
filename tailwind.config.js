module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'estrellas': "url('https://i.ibb.co/VpGwVbW/abstract-background-black-multicolor-wallpaper-preview.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
