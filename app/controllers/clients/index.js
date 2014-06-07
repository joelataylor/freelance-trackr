export default Ember.ArrayController.extend({
  itemController: 'client/index',

  actions: {
    deleteClient: function(client) {
      client.destroyRecord();
      this.transitionToRoute('clients');
    }
  }
});
