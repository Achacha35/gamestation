import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    saveReview() {
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       content: this.get('content'),
       game: this.get('game')
     };
     if (params.author !== undefined && params.rating !== undefined && params.content !== undefined) {
       this.sendAction('saveReview', params);
       this.set('author', '');
       this.set('rating', '');
       this.set('content', '')
}
     }
  }
});
