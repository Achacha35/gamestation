import Ember from 'ember';


export default Ember.Component.extend({
  sortBy: ['rating:desc'],
 sortedReviews: Ember.computed.sort('game.reviews', 'sortBy'),
  actions: {
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
