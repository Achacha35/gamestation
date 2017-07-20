import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  image: Ds.attr(),
  name: Ds.attr(),
  console: DS.attr()

});
