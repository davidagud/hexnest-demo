module.exports = {
  extend: 'apostrophe-pieces',
  name: 'contact',
  label: 'Contact-Form',
  addFields: [
    {
      name: 'name',
      label: 'Name',
      type: 'string',
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'message',
      label: 'Message',
      type: 'string',
      textarea: true,
      required: true
    }
  ],

  construct: function(self, options) {
    self.beforeSave = function(req, piece, options, callback) {
      piece.title = piece.name;
      return callback();
    };
  }
};
