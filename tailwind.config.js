
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Rubik': ['Rubik'],
     },
    extend: {
      backgroundImage: theme => ({
        'agro-intro-section': "url('./img/pexels-ollie-craig-6398585-min.jpg')",
        'agro-power-section': "url('./img/JUNAID-Renewable.png')",
        'agro-frite-section': "url('./img/Junaid\ Chip\ Potato-min.png')",
        'about-frite-section': "url('./img/energy\ and\ agriculture.png')",
        'about-mision-section': "url('./img/buildings-business-Junaid-min.png')",
        'about-fried-section': "url('./img/lightBulb-JUNAID.png')",
        'about-agro-section': "url('./img/lightBulb-JUNAID-1.png')",
        'junaid-power-one': "url('./img/light-bulb-JUNAID2.png')",
        'junaid-power-two': "url('./img/cat-xq1000-3.png')",
        'junaid-power-three': "url('./img/red-lantern-lamp-JUNAID.png')",
        'junaid-power-four': "url('./img/service-single2.2.png')",
        'junaid-agro-one': "url('./img/light-bulb-JUNAID.png')",
        'junaid-agro-two': "url('./img/Junaid slide.png')",
        'junaid-agro-three': "url('./img/Junaid\ Chip\ Potato.png')",
        'junaid-agro-four': "url('./img/XQ2000-Containerized2.png')",
        'junaid-agro-five': "url('./img/pexels-ollie-craig-6398585-min.jpg')",
        'junaid-contact-one': "url('./img/Environment.png')",
       }),

      colors: {
        primary:{
          100: 'rgb(98,210,67)',
          200: 'rgb(17, 57, 89)',
          300: 'rgb(73, 70, 14)',
          400: 'rgb(12, 94, 159)',
          500: 'rgb(242, 247, 250)',
        }
      },
      borderRadius: {
        'none': '0',
       'expand': '50%',
      },
      backgroundBlendMode: {
        100: 'overlay',
        200: 'multipy',
      },
      height: (theme) => ({
        fill: '90%',
      }),
      width: (theme) => ({
        ten: '10%',
        ninety: '90%',
      }),
      inset: {
       'nitone': '15px',
       'nittwo': '14px',
      },
    },
},
  plugins: [],
};


