// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: 'bootstrap.min',
      import: {
        inline: true
      }
    },
    {
      name: 'global',
      import: {
        inline: true
      }
    },
    {
      name: 'home',
      import: {
        inline: true
      }
    },
    {
      name: 'product',
      import: {
        inline: true
      }
    },
    {
      name: 'team',
      import: {
        inline: true
      }
    }
  ],
  scripts: [
    {
      name: 'bootstrap.bundle.min'
    },
    {
      name: 'site'
    }
  ]
};
