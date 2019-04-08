module.exports = {
  session: {
    // If this still says `undefined`, set a real secret!
    secret: '870565e1d9ba2301'
  },

  construct: function(self, options) {
    var compression = require('compression');
    apos.app.use(compression());
  }
};
