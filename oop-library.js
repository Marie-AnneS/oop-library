/* NON ARROW FUCNCTION FOR OBJECT because of this => trow ERREUR
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

const Library = (name, creator) => {
  name = name;
  creator = creator;
  playlist = [];
} */

/* function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlist = [];
} 
 
const library1 = new Library('DJset','marie-anne');

console.log(library1)*/
//--------------------------------------//
/* */
class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlalist(playlist){
    this.playlists.push(playlist)
  }

}
const library1 = new Library('DJset','marie-anne');


 
class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

  addTrack(track){
    this.tracks.push(track)
  }

  overAllRating(){
    let sum = 0;
    let lengthTracks = this.tracks.length;
    this.tracks.forEach((element) => {
      sum += Number(element.rating);
    })
    return sum /lengthTracks
  } 
  totalDuration(){
    let result = 0;
    let lengthTracks = this.tracks.length;
    this.tracks.forEach((element) => {
      result += element.length;
    })
    return result
  }
  
}
const playlists10 = new Playlist ('frite')


class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const track20 = new Track('la patate', '5', 5646)
const track22 = new Track('la chose', '2', 5006)
console.log('track20: ', track20)

library1.addPlalist(playlists10);
playlists10.addTrack(track20);
playlists10.addTrack(track22);

console.log('library1: ',library1)
console.log('playlists10: ', playlists10)

console.log('playlists10 overAllRating: ', playlists10.overAllRating())
console.log('playlists10 totalDuration: ', playlists10.totalDuration())