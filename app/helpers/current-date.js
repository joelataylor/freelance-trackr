export default Ember.Handlebars.makeBoundHelper(function() {
  return moment().format('LL');
});
