export default Ember.ObjectController.extend({
  totalReceived: function() {
    var projects = this.get('projects');
    var total = 0;

    projects.forEach(function(project){
      total += parseFloat(project.get('total'));
    });

    return total.toFixed(2);
  }.property('projects.@each', 'projects.@each.total')
});
