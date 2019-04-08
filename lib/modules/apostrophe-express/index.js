module.exports = {
  session: {
    // If this still says `undefined`, set a real secret!
    secret: '870565e1d9ba2301'
  },

  construct: function(self, options) {

    var express = require('express');
    var bodyParser = require('body-parser');
    var expressSession = require('express-session');
    var connectFlash = require('connect-flash');
    var cookieParser = require('cookie-parser');
    var compression = require('compression');

    // Create Apostrophe's `apos.app` and `apos.express` objects

    self.createApp = function() {
      self.apos.app = self.apos.baseApp = express();
      self.apos.express = express;
      self.apos.app.use(compression());
    };
  }
};
