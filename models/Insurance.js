var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Insurance Model
 * ==========
 */

var Insurance = new keystone.List('Insurance', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

Insurance.add({
  title: { type: String, required: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  author: { type: Types.Relationship, ref: 'User', index: true },
  publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
  image: { type: String },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400 },
  }
});

Insurance.schema.virtual('content.full').get(function () {
  return this.content.extended || this.content.brief;
});

Insurance.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Insurance.register();
