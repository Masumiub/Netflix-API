const API_KEY = 'a199d4ed39b70814916756ef09b9e76b';

const fullPath = `https://image.tmdb.org/t/p/original/...............`;


const requests= {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_Key=${API_KEY}&with_networks=213`,

    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,

    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,

    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,

    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`

}

function connectMovies (){
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(res=> res.json())
    .then(data=>loadMovies(data.results))
}


connectMovies();

function loadMovies(data){
    console.table(data);
    var allMovies = document.getElementById('all-movies')
    for(var i=0; i<data.length; i++){
        var newImg = document.createElement('img');
        newImg.src = `https://image.tmdb.org/t/p/original/${data[i].poster_path} `;
        newImg.classList.add('movie');
        allMovies.appendChild(newImg);
         
    }

}