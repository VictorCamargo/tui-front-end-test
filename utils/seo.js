export function seoMetaTags(context, page) {
  return {
    titleTemplate: `${context.$t(`${page}.meta.title`)} | %s`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: context.$t(`${page}.meta.description`)
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${context.$t(`${page}.meta.title`)} | TUI Portugal`
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: context.$t(`${page}.meta.description`)
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `${context.$t(`${page}.meta.title`)} | TUI Portugal`
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: context.$t(`${page}.meta.description`)
      }
    ]
  }
}
