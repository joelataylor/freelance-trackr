export default Ember.ObjectController.extend({
  needs: ['project'],
  newService: null,

  preTotal: function() {
    var total = 0;

    this.get('services').forEach(function(service){
      total += parseFloat(service.get('total'));
    });

    return total.toFixed(2);
  }.property('services.@each.total'),

  taxTotal: function() {
    var tax = (this.get('tax') / 100) * this.get('preTotal');
    return tax.toFixed(2);
  }.property('tax', 'preTotal'),
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
      total += tax;
    }

    return total.toFixed(2);
  }.property('preTotal','taxTotal','discountTotal'),

  actions: {
    addService: function() {
      var service = this.get('newService');
      var project = this.get('model');

      service.set('project', project);
      service.save();

      project.get('services').addObject(service);
      project.save();

      this.set('newService', this.store.createRecord('service'));
    },
    removeService: function(service) {
      var project = this.get('model');
      service.deleteRecord();

      service.save();
      project.save();
    },
    editService: function(service) {
      console.log('edit service',service);
    }
  }
});
