export default {
  name: 'multicurrentwhen',
  initialize: function() {
    Ember.LinkView.reopen({
      active: function() {
        // we allow link-to's currentWhen to specify multiple routes
        // so we need to check each one of them
        if (this.currentWhen && this.currentWhen.indexOf(',') >= 0) {
          var currents = this.currentWhen.split(','),
              router = Ember.get(this, 'router');

          for (var i = 0; i < currents.length; i++) {
            var isActive = router.isActive.apply(router, [currents[i]]);
            if (isActive) {
              return isActive;
            }
          }

          return false;
        }

        return this._super();
      }.property('resolvedParams', 'routerArgs')
    });
  }
};
