export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('client');
  },
  actions: {
    willTransition: function() {
      this.currentModel.project.destroyRecord();
    }
  }
});
