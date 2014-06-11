export default Ember.Component.extend({
  tagName: 'tr',
  classNames: 'service',
  classNameBindings: ['isEditing'],
  isEditing: false,
  isNewService: false,

  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    },
    saveService: function() {
      this.sendAction('saveService', this.get('service'));
      this.send('toggleEditing');
    },
    addService: function() {
      this.sendAction('action', this.get('service'));
    },
    removeService: function() {
      this.sendAction('removeService', this.get('service'));
    }
  }
});
