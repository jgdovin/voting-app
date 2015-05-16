// pubs go here
Meteor.publish('userData', function () {
  if (this.userId){
    return Meteor.users.find({_id: this.userId}, {fields: {'services.google.picture': 1}});
  } else {
    this.ready();
  }
});
