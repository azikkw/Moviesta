<template>
  <div class="movie-page font-satoshi">
    <button class="back-btn" aria-label="Back btn"><img src="assets/icons/back.svg" alt="back"></button>
    <div class="movie-top">
      <span class="movie-rating">7.6</span>
      <p class="movie-title">Avatar: The Way of Water</p>
      <ul class="movie-genres">
        <li>Science Fiction</li>
        <li>Adventure</li>
        <li>Action</li>
      </ul>
      <div class="movie-actions">
        <button class="trailer-btn" aria-label="Watch trailer btn">Watch Trailer</button>
        <button class="favorite-btn" aria-label="Add favorite btn"><Icon name="solar:bookmark-bold"/></button>
      </div>
      <div class="poster-shadow"></div>
    </div>
    <div class="movie-bottom">
      <ul class="movie-info">
        <li class="font-medium">2022</li>
        <li class="movie-age">13+</li>
        <li>2h 15m</li>
      </ul>
      <p class="movie-description">Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
      <ul class="movie-additional-info">
        <li class="movie-trailer">
          Movie Trailer
          <iframe class="movie-trailer" id="ytplayer" src="https://www.youtube.com/embed/d9MyW72ELq0" allowfullscreen/>
        </li>
        <li>Country<p>United States of America</p></li>
      </ul>
    </div>
    <img class="movie-poster" src="https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt="poster">
    <div class="movie-trailer larger">
      <iframe id="ytplayer" src="https://www.youtube.com/embed/d9MyW72ELq0" allowfullscreen/>
    </div>
  </div>
</template>

<script setup>
// {
//   "adult": false,
//     "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
//     "belongs_to_collection": {
//   "id": 87096,
//       "name": "Avatar Collection",
//       "poster_path": "/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg",
//       "backdrop_path": "/gxnvX9kF7RRUQYvB52dMLPgeJkt.jpg"
// },
//   "budget": 460000000,
//     "genres": [
//   {
//     "id": 878,
//     "name": "Science Fiction"
//   },
//   {
//     "id": 12,
//     "name": "Adventure"
//   },
//   {
//     "id": 28,
//     "name": "Action"
//   }
// ],
//     "homepage": "https://www.avatar.com/movies/avatar-the-way-of-water",
//     "id": 76600,
//     "imdb_id": "tt1630029",
//     "origin_country": [
//   "US"
// ],
//     "original_language": "en",
//     "original_title": "Avatar: The Way of Water",
//     "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     "popularity": 213.947,
//     "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     "production_companies": [
//   {
//     "id": 127928,
//     "logo_path": "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
//     "name": "20th Century Studios",
//     "origin_country": "US"
//   },
//   {
//     "id": 574,
//     "logo_path": "/nLNW1TeFUYU0M5U0qmYUzOIwlB6.png",
//     "name": "Lightstorm Entertainment",
//     "origin_country": "US"
//   }
// ],
//     "production_countries": [
//   {
//     "iso_3166_1": "US",
//     "name": "United States of America"
//   }
// ],
//     "release_date": "2022-12-14",
//     "revenue": 2320250281,
//     "runtime": 192,
//     "spoken_languages": [
//   {
//     "english_name": "English",
//     "iso_639_1": "en",
//     "name": "English"
//   }
// ],
//     "status": "Released",
//     "tagline": "Return to Pandora.",
//     "title": "Avatar: The Way of Water",
//     "video": false,
//     "vote_average": 7.6,
//     "vote_count": 11479
// }
</script>

<style scoped>

</style>