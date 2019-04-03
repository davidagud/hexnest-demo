module.exports = {
  label: 'Single Image',
  addFields: [
    {
      name: 'image',
      label: 'Image',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1
      }
    },
    {
      name: 'hidden',
      label: 'Hidden',
      type: 'boolean'
    }
  ]
};
