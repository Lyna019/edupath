module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      height: {
        'logo': '10px', // Example custom height
      },
      width: {
        'logo': '10px', // Example custom width
      },


      colors: {
        // Primary Colors
        'navy-blue': '#003366',
        'emerald-green': '#009975',
        // Secondary Colors
        'warm-yellow': '#FFC107',
        'soft-gray': '#F4F4F4',
        // Accent Colors (Original)
        'cerulean-blue': '#007BFF', // Note: Corrected the name from 'ceruleanblue' to 'cerulean-blue' for consistency
        'tangerine': '#FF7043',
        'light-blue': '#E0F2FE',
        // Additional Colors
        'cool-blue': '#8ecae6',
        'bright-blue': '#219ebc',
        'dark-blue': '#023047',
        'vibrant-orange': '#ffb703',
        'rich-orange': '#fb8500',
        'pink': '#ef476f', // Consider giving this a more descriptive name based on its use
        'yellow': '#ffd166', // Consider giving this a more descriptive name based on its use
        'mint': '#06d6a0', // Consider giving this a more descriptive name based on its use
        'medium-blue': '#118ab2', // Consider giving this a more descriptive name based on its use
        'deep-blue': '#073b4c', // Consider giving this a more descriptive name based on its use
      },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
