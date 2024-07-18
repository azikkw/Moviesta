export default defineEventHandler(async (event) => {

    const { id } = event.context.params;
    const { movieDbKey } = useRuntimeConfig();

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${movieDbKey}&append_to_response=releases,videos`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        },
        params: {
            language: 'en-US'
        }
    }

    return await fetch(url, options).then(res => res.json());

});