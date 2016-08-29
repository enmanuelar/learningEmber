import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  user: attr('string'),
  comments: hasMany('comment', {inverse:'user', async:true}),
  posts: hasMany('post', {inverse:'user', async: true})
});
