import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	message: '',
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length', 5),
	isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
	isDisabled: Ember.computed.not('isValid'),
	actions: {
		sendMessage: function(){
			alert(`sent message ${this.get('message')} from ${this.get('emailAddress')}`);
			this.set('responseMessage', `Thanks for submitting your message`);
			this.set('message', '');
		}
	}
});

