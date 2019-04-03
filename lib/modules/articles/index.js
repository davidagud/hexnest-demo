module.exports = {
  name: 'article',
  label: 'Article',
  pluralLabel: 'Articles',
  addFields: [
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 3, 2 ],
        limit: 1
      }
    }
  ]
};
