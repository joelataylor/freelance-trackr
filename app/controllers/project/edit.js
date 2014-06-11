export default Ember.ObjectController.extend({
  isSaving: false,
  clients: Em.A(),

  activeClients: function() {
    return this.get('clients');
  }.property(),

  actions: {
    saveProject: function() {
      var self = this;
      this.set('isSaving', true);
      var project = this.get('model');
      project.save()
        .then(function(){
          self.set('isSaving', false);
          self.transitionToRoute('project', project);
        });
    },
    deleteProject: function() {
      var project = this.get('model');
      project.destroyRecord();
      this.transitionToRoute('projects');
    }
  }
});
