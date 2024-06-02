import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export const getTrendingMovies = async () => {
    const response = await axios.get("trending/movie/day", {
        params: {
            api_key: "aeaf06d1d20a496f6c01daea0d772bae",
            page: 1,
        },
    });

    return response.data.results;
};


export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, {
        params: {
            api_key: "aeaf06d1d20a496f6c01daea0d772bae",
        },
    });
    return response.data;
}


export const getMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits`, {
        params: {
            api_key: "aeaf06d1d20a496f6c01daea0d772bae",
        },
    });
    return response.data.cast;
}

export const getMovieReview = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews`, {
        params: {
            api_key: "aeaf06d1d20a496f6c01daea0d772bae",
        },
    });
    return response.data.results;
}

export const getMoviesByTitle = async (filter) => {
    const response = await axios.get(`search/movie?query=${filter}`, {
        params: {
            api_key: "aeaf06d1d20a496f6c01daea0d772bae",
        },
    });
    return response.data.results;
}