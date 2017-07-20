import Ember from 'ember';

//Data



// var games = [{
//   id:1,
//   image: "https://aws.boxofficebuz.com/games/video-images/897-destiny-2-rally-the-troops-worldwide-reveal.jpg",
//   name: "Destiny 2",
//   console: "PS4"
// },{
//   id: 2,
//   image: "https://i.ytimg.com/vi/6L9vCasKGKw/maxresdefault.jpg",
//   name: "Call of Duty WWII",
//   console: "PS4"
// },{
//   id: 3,
//   image: "http://compass.xbox.com/assets/84/c7/84c70d66-02ce-42dd-a225-e70a31c0ff02.jpg?n=Destiny-Taken-King-2016_hero-desktop_1920x720_Complete-collection.jpg",
//   name: "Destiny",
//   console: "PS4"
// },{
//   id: 4,
//   image: "https://i.ytimg.com/vi/Kae-JjbLsgA/maxresdefault.jpg",
//   name: "Star Wars Battlefront II",
//   console: "PS4"
// },{
//   id: 5,
//   image: "https://i.ytimg.com/vi/AWv07fouYvs/maxresdefault.jpg",
//   name: "Batman:Return to Arkham",
//   console: "PS4"
// },{
//   id: 6,
//   image: "http://assets2.ignimgs.com/2013/09/12/gta-v-heistsjpg-e94705_1280w.jpg",
//   name: "GTA V",
//   console: "PS4"
// },{
//   id: 7,
//   image: "https://i.ytimg.com/vi/G203e1HhixY/maxresdefault.jpg",
//   name: "Bloodborne",
//   console: "PS4"
// },{
//   id: 8,
//   image:"http://compass.xbox.com/assets/e4/cb/e4cbf610-3534-4141-8f3e-3db0cfac8287.jpg?n=CoD-IW_hero-desktop_1920x720.jpg",
//   name: "Call of Duty Infinite Warfare",
//   console: "PS4"
//
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('game');
  },
});
