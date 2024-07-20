export default defineEventHandler(async (event) => {

    const { movieDbKey } = useRuntimeConfig();

    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbKey}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    }

    const trendingList = await fetch(url, options).then(res => res.json());

    // Getting random movie value for top poster
    const randomIndex = Math.floor(Math.random() * trendingList.results.length);
    const randomTrendingMovie = trendingList.results[randomIndex];

    return { trendingList, randomTrendingMovie };

});