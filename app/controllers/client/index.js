export default Ember.ObjectController.extend({
  projects: function() {
    var client = this.get('model');

    var promise = this.store.findAll('project')
      .then(function(allProjects){
        return Ember.RSVP.Promise.all(allProjects.map(function(project) {
          return project.get('client');
        })).then(function() {
          var filtered = allProjects.filter(function(item){
            return item.get('client.id') === client.get('id');
          });
          return filtered;
        });
      });

   return DS.PromiseArray.create({
      promise: promise
   });

  }.property()
});
