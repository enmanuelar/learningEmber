import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	message: '',
	isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('model.message.length', 5),
	isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
	isDisabled: Ember.computed.not('isValid'),
	//isDisabled: false,
	actions: {
		sendMessage: function({email: email, message: message}){
			if (this.isDisabled){
				const entry = this.store.createRecord('contact', {email: email, message: message});
				entry.save().then(response => { 
					this.set('responseMessage', `sent message ${response.get('message')} from ${response.get('email')}`);
				});
				this.set('responseMessage', `Thanks for submitting your message`);
				this.set('model.message', '');
			}
		}
	}
});
