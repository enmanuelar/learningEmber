import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    	return this.store.findAll('contact');
  },
  actions: {
  	deleteMessage(message){
  		let confirmation = confirm("You're going to delete this message, are you sure?");
  		if (confirmation){
  			message.destroyRecord();
  		}
  	}
  }
});
