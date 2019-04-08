// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  filters: {
    // Grab our ancestor pages, with two levels of subpages
    ancestors: {
      children: {
        depth: 2
      }
    },
    // We usually want children of the current page, too
    children: true
  },
  park: [
    {
      title: 'Search',
      slug: '/search',
      type: 'apostrophe-search',
      label: 'Search',
      published: true
    },
    {
      title: 'Challenge',
      slug: '/.well-known/acme-challenge/_eaRPBufwSesFDp5-MKPDgh7dJ2Qfz4ZsUIO2LvigAQ',
      type: 'challenge',
      label: 'Challenge',
      published: true
    }
  ],
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'product',
      label: 'Product'
    },
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'article-page',
      label: 'Article Index'
    },
    {
      name: 'contact-forms-page',
      label: 'Submitted Contact Forms'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages! An exception:
    // "pieces pages" like `event-pages` are rendered via the `views/index.html`
    // and `views/show.html` templates of those modules.
  ]
};
