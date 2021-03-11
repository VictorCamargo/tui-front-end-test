const en = require('../lang/en-GB.js')
const pt = require('../lang/pt-PT.js')

module.exports = {
  seo: false,
  parsePages: false,
  locales: [
    {
      name: 'Português',
      code: 'pt',
      iso: 'pt-PT',
      isoCode: 'pt_pt',
      file: 'pt.js'
    },
    {
      name: 'English',
      code: 'en',
      isoCode: 'en_gb',
      iso: 'en-GB',
      file: 'en.js'
    }
  ],
  defaultLocale: 'en',
  langDir: 'lang/',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, pt }
  },

  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: false,
    fallbackLocale: 'en'
  }
}
