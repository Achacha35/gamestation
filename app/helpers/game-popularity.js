import Ember from 'ember';

export function gamePopularity(params) {
  var game = params[0];

  if(game.get('reviews').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(gamePopularity);
