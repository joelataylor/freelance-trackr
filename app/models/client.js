var attr = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr(),
  status: attr('number'),
  contact: attr('string', {
    defaultValue: null
  }),
  email: attr('string', {
    defaultValue: null
  }),
  phone: attr('string', {
    defaultValue: null
  }),
  address: attr('string', {
    defaultValue: null
  }),
  city: attr('string', {
    defaultValue: null
  }),
  state: attr('string', {
    defaultValue: null
  }),
  zip: attr('string', {
    defaultValue: null
  }),

  projects: hasMany('project', {async: true}),
  invoices: hasMany('invoice', {async: true}),

  mailto: function() {
    return "mailto:" + this.get('email');
  }.property('email'),

  totalReceived: function() {
    var projects = this.get('projects');
    var total = 0;

    projects.forEach(function(project){
      total += parseFloat(project.get('total'));
    });

    return total.toFixed(2);
  }.property('projects.@each', 'projects.@each.total')
});
