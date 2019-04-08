module.exports = {
  if (process.env.LE_URL && process.env.LE_CONTENT) {
    app.get(process.env.LE_URL, function(req, res) {
      return res.send(process.env.LE_CONTENT)
    });
  };


  session: {
    // If this still says `undefined`, set a real secret!
    secret: '870565e1d9ba2301'
  }
};
