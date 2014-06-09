export default Ember.Component.extend({
  tagName: 'tr',
  classNames: 'service',
  classNameBindings: ['isEditing'],
  isEditing: false,

  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
    },
    saveService: function() {
      this.sendAction('action', this.get('service'));
      this.send('toggleEditing');
    }
  }
});
