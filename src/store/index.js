import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { API_KEY, TMBD_BASE_URL } from "../utils/constant";
// import axios from "axios";
import { fstore } from '../utils/firebase-config';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
}

export const getGeners = createAsyncThunk('netflix/genre', async () => {
    // const { data } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'];
    return genres;
});

const createArrayFromRawData = async (genre) => {
    const rawDataArray = [];
    const genreCollection = collection(fstore, `genre_${genre}`)
    const querySnapshot = await getDocs(genreCollection);

    querySnapshot.forEach((doc) => {
        const { name, year, url } = doc.data();
        // doc.data() is never undefined for query doc snapshots
        rawDataArray.push({
            id: doc.id,
            name: name,
            year: year,
            url: url,
            genre: genre,
        });
    });
    return rawDataArray;
};

const getRawData = async (genres) => {
    const movieArray = [];
    /* forEach không hỗ trợ async */
    // genres.forEach(async (genre) => {
    //     const rawDataArray = await createArrayFromRawData(genre);
    //     // movieArray = movieArray.concat(rawDataArray);
    //     movieArray.push(...rawDataArray);
    //     // console.log(1);
    //     // console.log(movieArray);
    // });
    for (const genre of genres) {
        const rawDataArray = await createArrayFromRawData(genre);
        movieArray.push(...rawDataArray);
    }
    return movieArray;
};

export const fetchMovies = createAsyncThunk('netflix/movies', async (_, thunkApi) => {
    const { netflix: { genres } } = thunkApi.getState();
    return await getRawData(genres);
});

const NetflixSlice = createSlice({
    name: 'Netflix',
    initialState,
    extraReducers: builder => {
        builder.addCase(getGeners.fulfilled, (state, action) => {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        });
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    }
})