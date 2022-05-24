// import { createAction } from "@reduxjs/toolkit";
// import { heroesFetched, heroesFetching, heroesFetchingError} from "../components/heroesList/heroesSlice";
// import { filtersFetching, filtersFetched, filtersFetchingError } from "../components/heroesFilters/filtersSlice";

// // export const fetchHeroes = (request) => (dispatch) => {
// //     dispatch(heroesFetching());
// //     request("http://localhost:3001/heroes")
// //         .then(data => dispatch(heroesFetched(data)))
// //         .catch(() => dispatch(heroesFetchingError()))
// // }
// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching());
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }


// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// // export const filtersFetching = createAction('FILTERS_FETCHING');
// // export const heroesFetchingError = () => {
// //     return {
// //         type: 'HEROES_FETCHING_ERROR'
// //     }
// // }
// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }
// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }
// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }
// export const activeFilterChanged = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'ACTIVE_FILTER_CHANGED',
//             payload: filter
//         })
//     }, 1000)
// }
// export const heroCreated = createAction('HERO_CREATED');

// export const deleteHero = createAction('HEROES_DELETE');

// export const deleteHero = (id) => {
//     return {
//       type: 'HEROES_DELETE',
//       payload: id
//     }
// }
// export const heroCreated = (hero) => {
//     return {
//         type: 'HERO_CREATED',
//         payload: hero
//     }
// }