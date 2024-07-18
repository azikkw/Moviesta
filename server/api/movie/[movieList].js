export default defineEventHandler(async (event) => {

    const { movieList } = event.context.params;
    const { movieDbKey } = useRuntimeConfig();

    const url = `https://api.themoviedb.org/3/movie/${movieList}?api_key=${movieDbKey}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    }

    return await fetch(url, options).then(res => res.json());

});