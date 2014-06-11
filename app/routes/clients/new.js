export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('client');
  },
  actions: {
    willTransition: function() {
      if (this.currentModel.get('isNew')) {
        this.currentModel.destroyRecord();
      }
    }
  }
});
