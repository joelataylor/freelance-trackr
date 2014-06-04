var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  date: attr('string', {
    defaultValue: function() { return moment().format('YYYY-MM-DD'); }
  }),
  description: attr(),
  per: attr('string', {
    defaultValue: function() { return 'hour'; }
  }),
  price: attr('number', {
    defaultValue: function() { return 100; }
  }),
  project: belongsTo('project', { async: true }),
  quantity: attr('number', {
    defaultValue: function() { return 1; }
  }),
  type: attr(),
  total: function() {
    return (this.get('quantity') * this.get('price')).toFixed(2);
  }.property('quantity','price'),

  serviceTypes: ['Web Development', 'Web Design', 'Support'],
  servicePer: ['hour', 'day', 'project', 'service']
});
