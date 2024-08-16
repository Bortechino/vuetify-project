// Styles

import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'


// Vuetify
import '@fortawesome/fontawesome-free/css/all.css'


import { createVuetify } from 'vuetify'

import { aliases, fa } from 'vuetify/iconsets/fa'


export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  blueprint: md3,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },

  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        light: false,
        variables: {}, // ✅ this property is required to avoid Vuetify crash

        colors: {
          //green: '#00ff00' // cannot use primary color names here, so use a custom color name (such as 'greenish')
          greenish: '#03DAC5',

          // Workaround: Custom colors seem to erase default colors, so we need to include the default colors (of `light` or `dark` theme)
          background: '#fbfbfb',
          surface: '#212121',
          primary: '#00ff00',
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC5',
          'secondary-darken-1': '#03DAC5',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
      },
      darkBlue: {
        dark: true,
        variables: {}, // ✅ this property is required to avoid Vuetify crash

        colors: {
          //green: '#00ff00' // cannot use primary color names here, so use a custom color name (such as 'greenish')
          greenish: '#03DAC5',

          // Workaround: Custom colors seem to erase default colors, so we need to include the default colors (of `light` or `dark` theme)
          background: '#111928',
          surface: '#212121',
          primary: '#00ff00',
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC5',
          'secondary-darken-1': '#03DAC5',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
      }
    }
  }, props: ["productItem"],
  data() {
    return {};
  }
})
