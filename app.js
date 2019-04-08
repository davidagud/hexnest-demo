var path = require('path');

var apos = require('apostrophe')({
  shortName: 'hexnest',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // This module adds Nunjucks "helper functions" and helper data useful in all templates.
    //
    // Some uses include special template functions that go outside the depth of nunjucks,
    // often by exporting lodash functions, and reusable, centralized apos.area configurations.
    //
    // The module also contains useful library .js files containing ready-made options
    // for areas and the like, which other modules `require` to avoid redundancy.
    'helpers': { extend: 'apostrophe-module' },

    // Categorical "meta" piece types
    'category-object-types': { extend: 'apostrophe-pieces' },

    // Various piece types visualized around the site

    'articles': { extend: 'apostrophe-blog' },
    'articles-pages': { extend: 'apostrophe-pieces-pages' },
    'articles-widgets': { extend: 'apostrophe-pieces-widgets' },
    'articles-featured-widgets': { extend: 'apostrophe-widgets' },
    'contact-forms': {},
    'contact-forms-pages': { extend: 'apostrophe-pieces-pages' },
    'contact-forms-widgets': { extend: 'apostrophe-pieces-widgets' },
    'contact-forms-submit-widgets': { extend: 'apostrophe-pieces-submit-widgets', fields: [ 'name', 'email', 'message' ], published: true },

    // Content Widgets
    'arrow-link-widgets': { extend: 'apostrophe-widgets' },
    'background-image-widgets': { extend: 'apostrophe-widgets' },
    'content-widgets': { extend: 'apostrophe-widgets' },
    'feature-widgets': { extend: 'marquee-widgets' },
    'image-widgets': { extend: 'apostrophe-widgets' },
    'link-widgets': { extend: 'apostrophe-widgets' },
    'marquee-widgets': { extend: 'apostrophe-widgets' },
    'slideshow-widgets': { extend: 'apostrophe-widgets' }

  }
});

apos.app.get('/.well-known/acme-challenge/_eaRPBufwSesFDp5-MKPDgh7dJ2Qfz4ZsUIO2LvigAQ
', function(req, res){
  return res.send(_eaRPBufwSesFDp5-MKPDgh7dJ2Qfz4ZsUIO2LvigAQ.SKzb38UrsxwM0HK05wWRCFIsn774O0BNq8e57H3YSyk)
});
