export default Ember.ObjectController.extend({
  isSaving: false,

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
