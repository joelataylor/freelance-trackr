var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  date: attr('string', {
    defaultValue: function() { return moment().format('YYYY-MM-DD'); }
  }),
  description: attr(),
  per: attr('string', { defaultValue: 'hour' }),
  price: attr('number', { defaultValue: 100 }),
  quantity: attr('number', { defaultValue: 1 }),
  type: attr(),

  project: belongsTo('project', { async: true }),

  total: function() {
    return (this.get('quantity') * this.get('price')).toFixed(2);
  }.property('quantity','price'),

  serviceTypes: ['Web Development', 'Web Design', 'Support'],
  servicePer: ['hour', 'day', 'project', 'service']
});
