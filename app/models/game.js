import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  name: DS.attr(),
  console: DS.attr(),
  details: DS.attr(),
  reviews: DS.hasMany('review', { async: true })

});
