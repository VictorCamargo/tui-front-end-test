const enGB = require('../lang/en-GB.js')
const ptPT = require('../lang/pt-PT.js')
const ptBR = require('../lang/pt-BR.js')

module.exports = {
  seo: false,
  parsePages: false,
  locales: [
    {
      name: 'Português PT',
      code: 'pt',
      iso: 'pt-PT',
      isoCode: 'pt_pt',
      file: 'pt-PT.js'
    },
    {
      name: 'Português BR',
      code: 'br',
      iso: 'pt-BR',
      isoCode: 'pt_br',
      file: 'pt-BR.js'
    },
    {
      name: 'English UK',
      code: 'en',
      isoCode: 'en_gb',
      iso: 'en-GB',
      file: 'en-GB.js'
    }
  ],
  defaultLocale: 'en',
  langDir: 'lang/',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { pt: ptPT, br: ptBR, en: enGB }
  },

  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: false,
    fallbackLocale: 'en'
  }
}
