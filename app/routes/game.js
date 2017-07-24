import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },
  actions: {
    update(game, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          game.set(key, params[key]);
        }
      });
      game.save();
      this.transitionTo('index');
    },
    saveReview(params) {
     var newReview = this.store.createRecord('review', params);
     var game = params.game;
     game.get('reviews').addObject(newReview);
     newReview.save().then(function() {
       return game.save();
     });
     this.transitionTo('game', game);
   },
   destroyGame(game) {
      var review_deletions = game.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return game.destroyRecord();
      });
      this.transitionTo('index');
    },
   destroyReview(review) {
     review.destroyRecord();
     this.transitionTo('index');
   }
  }
});
