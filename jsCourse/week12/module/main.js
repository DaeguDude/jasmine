const Display = (function() {
  const getMovieListContainer = () => {
    return document.querySelector('.movieList-container');
  }

  const getActorListContainer = () => {
    return document.querySelector('.actorList-container');
  }

  const addMovie = (movie) => {
    const movieListContainer = getMovieListContainer();

    const movieSpan = document.createElement('span');
    movieSpan.innerText = movie;

    movieListContainer.appendChild(movieSpan);
  }

  const addActor = (actor) => {
    const actorListContainer = getActorListContainer();

    const actorSpan = document.createElement('span');
    actorSpan.innerText = actor;

    actorListContainer.appendChild(actorSpan);
  }

  return {
    addMovie,
    addActor
  }
})();

const MovieList = (function () {
  const movieList = [];

  const addMovie = (movie) => {
    movieList.push(movie);
  }

  const getListOfMovies = () => {
    return movieList;
  }

  return {
    addMovie,
    getListOfMovies
  }
})();

const ActorList = (function () {
  const actorList = [];

  const addActor = (actor) => {
    actorList.push(actor);
  }

  const getListOfActors = () => {
    return actorList;
  }

  return {
    addActor,
    getListOfActors
  }
})();

Display.addMovie('라이언 일병 구하기');
MovieList.addMovie('라이언 일병 구하기');
console.log(MovieList.getListOfMovies());

Display.addActor('톰 행크스');
ActorList.addActor('톰 행크스');
console.log(ActorList.getListOfActors());

Display.addMovie('아이언맨');
MovieList.addMovie('아이언맨');
console.log(MovieList.getListOfMovies());

Display.addActor('로버트 다우니 주니어');
ActorList.addActor('로버트 다우니 주니어');
console.log(ActorList.getListOfActors());

