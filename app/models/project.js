var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr(),
  status: attr(),
  tax: attr('number', {defaultValue: 0}),
  discount: attr('number', {defaultValue: 0}),
  start_date: attr('string', {
    defaultValue: function() { return moment().format('YYYY-MM-DD'); }
  }),
  finish_date: attr('string'),

  invoice: belongsTo('invoice', { async: true }),
  client: belongsTo('client', { async: true }),
  services: hasMany('service', { async: true })
});
