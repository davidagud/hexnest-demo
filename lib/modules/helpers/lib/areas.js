const _ = require('lodash');
let baseToolbar = [ 'Styles', 'Bold', 'Italic', 'Blockquote', 'Link', 'Anchor', 'Unlink', 'NumberedList', 'BulletedList', 'Split' ];
let baseStyles = [
  { name: 'Body Copy (P)', element: 'p', attributes: { class: 'o-body' } },
  { name: 'Section Header (H2)', element: 'h2', attributes: { class: 'o-section-header' } },
  { name: 'Headline (H3)', element: 'h3', attributes: { class: 'o-headline' } },
  { name: 'SuhHeadline (H4)', element: 'h4', attributes: { class: 'o-subheadline' } },
  { name: 'Meta (P)', element: 'p', attributes: { class: 'o-meta' } }
];
let narrowWidgets = {
  'apostrophe-rich-text': {
    toolbar: baseToolbar,
    styles: baseStyles
  },
  'image': {},
  'slideshow': {},
  'logo-mask': {},
  'link': {},
  'columns': {
    controls: {
      position: 'bottom-left'
    }
  },
  'apostrophe-video': {},
  'content': {},
  'articles': {},
};

let wideWidgets = {
  'marquee': {},
  'feature': {},
};

module.exports = {
  baseToolbar: baseToolbar,
  baseStyles: baseStyles,
  baseWidgets: _.extend({}, narrowWidgets, wideWidgets),
  narrowWidgets: narrowWidgets
};
