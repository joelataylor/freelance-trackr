export default Ember.Route.extend({
  redirect: function() {
    this.replaceWith('projects');
  }
});
