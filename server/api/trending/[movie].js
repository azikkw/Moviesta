export default defineEventHandler(async (event) => {

    const { movieDbKey } = useRuntimeConfig();

    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbKey}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    }

    return await fetch(url, options).then(res => res.json());

});