export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('project');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('clients', this.store.find('client'));
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.destroyRecord();
      }
    }
  }
});
