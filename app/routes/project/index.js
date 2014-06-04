export default Ember.Route.extend({
  model: function () {
    return Ember.Object.create({
      project: this.modelFor('project'),
      service: this.store.createRecord('service')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model.project);
    controller.set('newService', this.store.createRecord('service'));
  }
});
