var attr = DS.attr;

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

  mailto: function() {
    return "mailto:" + this.get('email');
  }.property('email')
});
