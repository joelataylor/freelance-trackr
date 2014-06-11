export default DS.FirebaseAdapter.extend({
  firebase: new Firebase(ENV.APP.firebaseDB)
});
