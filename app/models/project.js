var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr(),
  status: attr(),
  tax: attr('number', {defaultValue: 0}),
  discount: attr('number', {defaultValue: 0}),
  start_date: attr('string', {defaultValue: moment().format('YYYY-MM-DD')}),
  finish_date: attr('string'),

  client: belongsTo('client', { async: true }),
  services: hasMany('service', { async: true }),
  invoice: belongsTo('invoice', { async: true }),

  preTotal: function() {
    var total = 0;

    this.get('services').forEach(function(service){
      total += parseFloat(service.get('total'));
    });

    return total.toFixed(2);
  }.property('services.@each.total'),

  taxTotal: function() {
    var tax = (this.get('tax') / 100) * (this.get('preTotal') - this.get('discountTotal'));
    return tax.toFixed(2);
  }.property('tax', 'discountTotal', 'preTotal'),
  discountTotal: function() {
    var discount = (this.get('discount') / 100) * this.get('preTotal');
    return discount.toFixed(2);
  }.property('discount', 'preTotal'),

  total: function() {
    var total = this.get('preTotal');

    if (this.get('discount')) {
      var discount = (this.get('discount') / 100) * total;
      discount.toFixed(2);
      total -= discount;
    }

    if (this.get('tax')) {
      var tax = (this.get('tax') / 100) * total;
      tax.toFixed(2);
      total = parseFloat(total) + tax;
    }

    if (typeof total === 'number') {
      return total.toFixed(2);
    }

    return total;
  }.property('preTotal','taxTotal','discountTotal')
});
