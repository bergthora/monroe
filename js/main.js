
function getMovies(url, id){
  var r = new XMLHttpRequest(); //Jquery buþið að skrifa þetta. klasi sem er gerður til þess að fá kóda annars staðar en af síðunni okkar
  r.open("GET",url, true); // Notum oftast GET . URL eru Upplýsingar sem við erum að ná í . Gott að setja urlið í json validator til að fá þær skýrari.
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return; // event sem segir þegar gögnin eru tilbúin á servernum.
    const response = JSON.parse(r.responseText)
    console.log(response)
    initialize(response, id);
  };
  r.send();
}


class Movie{
  constructor(movieInfo){
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
    // document.getElementById("main").innerHTML = `
    // 	<div class="columns small-12">
    // 			<div class="superslider">
    // 				<div class="slide-single">
    // 					<img src="http://image.tmdb.org/t/p/original/${movieList[0].poster}" alt="">
    // 				</div>
    // 				<div class="slide-single">
    // 					<img src="images/jaws.jpg" alt="">
    // 				</div>
    // 				<div class="slide-single">
    // 					<img src="images/jaws.jpg" alt="">
    // 				</div>
    // 				<div class="slide-single">
    // 					<img src="images/jaws.jpg" alt="">
    // 				</div>
    // 				<div class="slide-single">
    // 					<img src="images/jaws.jpg" alt="">
    // 				</div>
    // 			</div>
    // 		</div>`




      // document.getElementById("main").innerHTML = `
      // <div class="row">
			// 	<div class="columns small-12">
			// 		<div class="responsive">
      //
			// 		</div>
			// 	</div>
			// </div>`
      // for(let i = 0; i < movieList.length; i++)
      // {
      // document.getElementById("responsive").innerHTML = `
      // <div class="slide-single">
      //   <img src="images/jaws.jpg" alt="">
      //   <div class="overlay">
      //     <h2>${"http://image.tmdb.org/t/p/original" + movieList[i].poster}</h2>
      //     <h3>leikari</h3>
      //     <div class="rating-circle">
      //       <h4>8.9</h4>
      //     </div>
      //   </div>
      // </div>`
      // }

    // movieList.forEach(function(){
    //   let container = document.createElement("div");
    //   let image = document.createElement("img");
    //   let title = document.createElement("h1");
    //   image.src = "http://image.tmdb.org/t/p/original" + movieList[].poster;  //til að fá þessa slóð. Fara inní Configuration á https://developers.themoviedb.org/3/configuration og í Try It Out flipann. Setja þar inní Api keyinn.
    //   title.innerHTML = movieList[].title; //original_title hér
    //
    //   container.append(image);
    //   container.append(title);
    //   sliderDiv.appendChild(container);
    // });



    // let main = document.getElementById("main");

    // let rowDiv = document.createElement("div");
    // rowDiv.className += "row"
    // main.appendChild(rowDiv);
    // let columDiv = document.createElement("div");
    // columDiv.className += "columns small-12";
    // rowDiv.appendChild(columDiv)
    // let sliderDiv = document.createElement("div");
    // sliderDiv.className += "responsive";
    // columDiv.appendChild(sliderDiv);
    // let sliderSingleDiv = document.createElement("div");
    // sliderSingleDiv.className += "slide-single";
    // sliderDiv.appendChild(sliderSingleDiv);
    //
    // let heading = document.createElement("h2");
    // sliderSingleDiv.appendChild(heading);
    let slider = document.getElementById(id);
    
  for(let i = 0; i < movieList.length; i++)
  {

    let container = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("h3");
    let voteNumber = document.createElement("h4");
    let vote = document.createElement("div");
    vote.className = "rating-circle";
    vote.append(voteNumber);
    let p = document.createElement("p");

    let genreId = genres.filter(genre => movieList[i].genre_ids[0] === genre.id)[0].name;
    console.log(genreId)
    p.innerHTML = genreId;

    container.append(p);
    image.src = "http://image.tmdb.org/t/p/original" + movieList[i].poster;  //til að fá þessa slóð. Fara inní Configuration á https://developers.themoviedb.org/3/configuration og í Try It Out flipann. Setja þar inní Api keyinn.
    title.innerHTML = movieList[i].title; //original_title hér
    vote.innerHTML = movieList[i].vote;

    let overlayDiv = document.createElement("div");
    overlayDiv.className = "overlay";
    container.appendChild(overlayDiv);

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

// app
getMovies("https://api.themoviedb.org/3/movie/popular?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1","popular-slider");
getMovies("https://api.themoviedb.org/3/movie/upcoming?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1","upcoming-slider");
getMovies("https://api.themoviedb.org/3/movie/top_rated?api_key=62361387d4ff155b9130578453108221&language=en-US&page=1", "toprated-slider");

// `jkfjajfijisajfijdis`
