export default Ember.ObjectController.extend({
  isSaving: false,

  actions: {
    saveClient: function() {
      var self = this;
      this.set('isSaving', true);
      var client = this.get('model');
      client.save()
        .then(function(){
          self.set('isSaving', false);
        });
    }

  }
});
