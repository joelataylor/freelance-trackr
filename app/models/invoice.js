var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  bill_date: attr(),
  due_date: attr(),
  email_text: attr(),
  email_to: attr(),
  notes: attr(),
  received_date: attr(),

  project: belongsTo('project', { async: true }),
  client: belongsTo('client', { async: true })
});
