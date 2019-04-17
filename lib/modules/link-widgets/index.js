const schema = require('./lib/schema.js');
const _ = require('lodash');

module.exports = {
  label: 'Link',
  addFields: [
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      titleField: 'linkText',
      schema: _.clone(schema)
    },
    {
      name: 'size',
      label: 'font-size',
      type: 'select',
      choices: [
        {
          label: 'H1',
          value: 'h1-link'
        },
        {
          label: 'H2',
          value: 'h2-link'
        },
        {
          label: 'H3',
          value: 'h3-link'
        },
        {
          label: 'H4',
          value: 'h4-link'
        },
        {
          label: 'H5',
          value: 'h5-link'
        },
        {
          label: 'XL',
          value: 'h6-link'
        },
        {
          label: 'p',
          value: 'p-link'
        }
      ]
    },
    {
      name: 'weight',
      label: 'Font-weight',
      type: 'select',
      choices: [
        {
          label: 'Bold',
          value: 'bold-link'
        },
        {
          label: 'Regular',
          value: ''
        },
        {
          label: 'Thin',
          value: 'thin-link'
        }
      ]
    }
  ]
};
