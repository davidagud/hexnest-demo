module.exports = {
  modules: {
    'apostrophe-assets': {
      // Set to true for full CSS and JS minify, on staging and production servers
      // minify: true
    },
    // If these are your db settings then you don't need to be explicit. If not
    // you can uncomment this and get more specific.
    'apostrophe-db': {
      uri: process.env.APOS_MONGODB_URI
    }
  }
};
