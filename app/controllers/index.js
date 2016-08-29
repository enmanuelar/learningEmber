import Ember from 'ember';
import Faker from 'faker';
import DS from 'ember-data';
import attr from 'ember-data/attr';

export default Ember.Controller.extend({

  actions: {
    createUser: function(){
      const username = Faker.name.findName();
      //alert(username);
       const newUser = this.store.createRecord('users', {});
       newUser.set('user', username)
       newUser.save().then((response) => alert(`New user stored ${response.get('user')}`))
    },
    createPost: function(){
    	const title = Faker.lorem.sentence();
    	const content = Faker.lorem.paragraph();
    	const date = new Date();
    	//const user = this.store.findAll('users');
    	this.store.query('users', { filter: { user: 'Esperanza Kerluke' } }).then(function(user) {
  			alert(user);
		});
    	//const user = this.get('store.model.users');
    	//this.set('randomUser', user.get('users'));
    	//alert(this.randomUser.length);
    	const newPost = this.store.createRecord('post', {title: title, content:content, date:date});
    	//newPost.save().then((response) => alert(`Created new posts: ${response.get('title')}`));
    }
  },
  randomProp: function (obj) {
  	let users = [];
  	for(let user in obj){
  		console.log(user.user);
  		//users.push(user);
  	}
  	/*return users;
  	return obj.user;*/
	}
});
