var loaded = false;
var time = 300000;
window.onload = function() {
     loaded = true;
     loading = document.getElementById("loading").style.display = "none";
 };
setTimeout(function() {
     if(!loaded) {
         window.location.reload();
     }

},time);


function getMovies(url, id){
  var r = new XMLHttpRequest(); //Jquery buþið að skrifa þetta. klasi sem er gerður til þess að fá kóda annars staðar en af síðunni okkar
  r.open("GET",url, true); // Notum oftast GET . URL eru Upplýsingar sem við erum að ná í . Gott að setja urlið í json validator til að fá þær skýrari.
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return; // event sem segir þegar gögnin eru tilbúin á servernum.
    const response = JSON.parse(r.responseText)

    $(document).on('click', ".movieImg", function() {
         let movieId = ($(this).attr("id"));
         var movie = movies.filter(function(m) {
             return m.movieId == movieId;
         })[0];
         let poster = document.getElementById(movieId);
         poster.src = movie.poster;
         window.location = "movie.html";
         // "https://api.themoviedb.org/3/movie/"+movieid+"?api_key=<<api_key>>&language=en-US"
    })

    for (var i = 0; i < response.results.length; i++) {

    }
    initialize(response, id);
  };
  r.send();
}

class Movie{
  constructor(movieInfo){
    this.movieId = movieInfo.id;
    this.title = movieInfo.original_title;
    this.poster = movieInfo.poster_path;
    this.vote = movieInfo.vote_average;
    this.genre_ids = movieInfo.genre_ids;

  }
}

function initialize(movieData, id){

  //hide loading screen
  //hideScreen();

  //create movie instances
  let movies = createMovieInstances(movieData);

  //populate movie list
  populateMovieList(movies, id);

}
function createMovieInstances(movieData){
  let movieInstances = [];
  for(let movie of movieData.results){
    movieInstances.push(new Movie(movie));
  }
  return movieInstances;
}
function populateMovieList(movieList, id){

    let slider = document.getElementById(id);


  for(let i = 0; i < movieList.length; i++)
  {

    let container = document.createElement("div");
    let image = document.createElement("img");
    image.className += "movieImg";
    // image.className = "slide-image";
    image.id = movieList[i].movieId;
    let title = document.createElement("h3");
    let voteNumber = document.createElement("h5");
    let vote = document.createElement("div");
    vote.className = "rating-circle";
    vote.append(voteNumber);
    let pgenre = document.createElement("p");
    let movieGenres = genres.filter(genre => movieList[i].genre_ids.indexOf(genre.id) > -1);
    let genreString = "";
    movieGenres.forEach(function(movieGenre){
      genreString += movieGenre.name + ", ";
    });
    pgenre.innerHTML = genreString;

    // let pcast = document.createElement("p");
    // let movieCasts = casts.filter(cast =)


    image.src = "http://image.tmdb.org/t/p/original" + movieList[i].poster;  //til að fá þessa slóð. Fara inní Configuration á https://developers.themoviedb.org/3/configuration og í Try It Out flipann. Setja þar inní Api keyinn.
    title.innerHTML = movieList[i].title; //original_title hér
    vote.innerHTML = movieList[i].vote;

    let overlayDiv = document.createElement("div");
    overlayDiv.className = "overlay";
    container.appendChild(overlayDiv);

    container.append(pgenre);
    container.append(image);
    container.append(title);
    container.append(vote);
    slider.appendChild(container);

  }
  $("#"+id).slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3.5,
  slidesToScroll: 3,
  centerMode: false,
  centerPadding: "40px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.05,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
}

let more =  document.getElementById("moreButton");
function getMore(movieList, id){

}
// app
getMovies("https://api.themoviedb.org/3/movie/popular?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1","popular-slider");
getMovies("https://api.themoviedb.org/3/movie/upcoming?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1","upcoming-slider");
getMovies("https://api.themoviedb.org/3/movie/top_rated?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1", "toprated-slider");
