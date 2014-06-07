export default Ember.ArrayController.extend({
  //itemController: 'project/index'
  actions: {
    deleteProject: function(project) {
      project.destroyRecord();
      this.transitionToRoute('projects');
    }
  }
});
