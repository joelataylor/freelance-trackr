var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('projects', function() {
    this.route('new');
  });
  this.resource('project', { path: '/projects/:project_id' }, function() {
    this.route('edit');
  });

  this.resource('invoices');

  this.resource('clients', function() {
    this.route('new');
  });
  this.resource('client', { path: '/clients/:client_id' }, function() {
    this.route('edit');
  });

  this.resource('services');
  this.resource('reports');
});

export default Router;
