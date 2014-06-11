export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('clients', this.store.find('client'));
  }
});
