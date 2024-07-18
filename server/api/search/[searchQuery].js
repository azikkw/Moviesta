export default defineEventHandler(async (event) => {

    const { searchQuery } = event.context.params;
    const { movieDbKey } = useRuntimeConfig();

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${movieDbKey}&include_adult=false&language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    }

    return await fetch(url, options).then(res => res.json());

});