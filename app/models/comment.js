import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  user: belongsTo('users', {inverse: 'comments', async: true}),
  content: attr('string'),
  date: attr('date'),
  post: belongsTo('posts')
});
