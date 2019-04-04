module.exports = {
  modules: {
    'apostrophe-assets': {
      uploadfs: {
        backend: 's3',
        secret: process.env.APOS_S3_SECRET,
        key: process.env.APOS_S3_KEY,
        bucket: process.env.APOS_S3_BUCKET,
        region: process.env.APOS_S3_REGION
      },

    // Set to true for full CSS and JS minify, on staging and production servers
    // minify: true
    },
    // If these are your db settings then you don't need to be explicit. If not
    // you can uncomment this and get more specific.
    'apostrophe-db': {
    uri: process.env.MONGODB_URI
    }
  }
};
