import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr('string'),
  content: attr('string'),
  date: attr('date'),
  user: belongsTo('users', {inverse: 'posts', async: true}),
  comments: hasMany('comments')

});
