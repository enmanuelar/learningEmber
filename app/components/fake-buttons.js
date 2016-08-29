import Ember from 'ember';
import Faker from 'faker';

export default Ember.Component.extend({
  actions: {
    createUser: function(){
      this.sendAction('createUser');
      /*const username = Faker.name.findName();
      const newUser = this.store.createRecord('users', {user: username});
      newUser.save().then((response) => alert(`New user stored ${response.get('user')}`))*/
    },
    createPost: function(){
    	this.sendAction('createPost');
    }
  }
});
