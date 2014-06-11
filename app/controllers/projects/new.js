export default Ember.ObjectController.extend({
  clients: Em.A(),
  client: null,

  activeClients: function() {
    return this.get('clients').filterBy('status');
  }.property('clients.@each.status'),

  actions: {
    createProject: function() {
      var project = this.get('model'),
          client = this.get('client'),
          self = this;

      project.set('client', client);
      project.set('status', 'in-progress');

      project.save().then(function(){
        // We have to manually save the project to the client
        client.get('projects').then(function(projects){
          projects.addObject(project);
          client.save().then(function(){
            self.transitionToRoute('project.index', project);
          });
        });
      });

    }
  }
});
