export default Ember.ObjectController.extend({
  actions: {
    createClient: function() {
      var client = this.get('model'),
          self = this;

      client.set('status', 1);
      client.save().then(function(){
        self.transitionToRoute('client.index', client);
      });

    }
  }
});
