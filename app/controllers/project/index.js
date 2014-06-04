export default Ember.ObjectController.extend({
  needs: ['project'],
  newService: null,
  isEditing: true,
  actions: {
    addService: function() {
      var service = this.get('newService');
      var project = this.get('model');

      service.set('project', project);
      service.save();

      project.get('services').addObject(service);
      project.save();

      this.set('newService', this.store.createRecord('service'));
    },
    removeService: function(service) {
      var project = this.get('model');
      service.deleteRecord();

      service.save();
      project.save();
    },
    editService: function(service) {
      console.log('edit service',service);
    }
  }
});
