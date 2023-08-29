let Api = 'https://omdbapi.com/?apikey=d7deed0f&t=';

let title = document.getElementById('title');

let date = document.getElementById('Date');
let director = document.getElementById('Director');
let actor = document.getElementById('Actor');
let genre = document.getElementById('Genre');
let desc = document.getElementById('Desc');
let collection = document.getElementById('collection');
let award = document.getElementById('Award');
let writer = document.getElementById('writer');
let rating = document.getElementById('ratings');
let img = document.getElementById('img');


let Mcart = document.getElementById('Mcart');
let loader = document.getElementById('Ani-loader');
Mcart.classList.add('d-none');
loader.classList.add('d-none');




function searchMovie() {
    loader.classList.remove('d-none');

    let movieName = document.getElementById('movieName');
    let query = Api + movieName.value;

    fetch(query).then((data) => {
        return data.json();
    }).then((data) => {
        loader.classList.add('d-none');
        Mcart.classList.remove('d-none');
        title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        actor.innerText = data.Actors;
        genre.innerText = data.Genre;
        desc.innerText = data.Plot;
        collection.innerText = data.BoxOffice;
        award.innerText = data.Awards;
        writer.innerText = data.Writer;
        rating.innerText = 'IMDB  ' + data.imdbRating;
        img.src = data.Poster;
    })

}