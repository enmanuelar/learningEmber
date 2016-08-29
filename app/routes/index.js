import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		//return this.store.findAll('users');
		return Ember.RSVP.hash({
      		users: this.store.findAll('users'),
      		posts: this.store.findAll('post').then(function(post){
      			return post.sortBy('date').reverse();
      		})
    	})
	},

	setupController(controller, model){
		controller.set('users', model.users),
		controller.set('posts', model.posts)
	}
});
