// import { createReducer } from '@reduxjs/toolkit';
// import {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
//     heroCreated,
//     deleteHero
// } from '../actions';

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

// const heroes = createReducer(initialState, {
//     [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
//     [heroesFetched]: (state, action) => {
//                      state.heroesLoadingStatus = 'idle';
//                      state.heroes = action.payload;
//                     },
//     [heroesFetchingError]: state => {
//                     state.heroesLoadingStatus = 'error'
//                     },
//     [heroCreated]: (state, action) => {
//                      state.heroes.push(action.payload)
//                     },
//     [deleteHero]: (state, action) => {
//                      state.heroes = state.heroes.filter(item => item.id !== action.payload)
//                     }
//             },
//     [],
//     state => state
// )
// export default heroes;



// const heroes = createReducer(initialState, builder => {
//     builder
//          .addCase(heroesFetching, state => {
//              state.heroesLoadingStatus = 'loading'
//          })
//          .addCase(heroesFetched, (state, action) => {
//              state.heroesLoadingStatus = 'idle';
//              state.heroes = action.payload;
//          })
//          .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error'
//          })
//          .addCase(heroCreated, (state, action) => {
//              state.heroes.push(action.payload)
//          })
//          .addCase(deleteHero, (state, action) => {
//              state.heroes = state.heroes.filter(item => item.id !== action.payload)
//          })
//          .addDefaultCase(() => {})
// })

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_CREATED':
//         return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         case 'HEROES_DELETE':
//             const newHeroList = state.heroes.filter(item => item.id !== action.payload)
//             return {
//                 ...state,
//                 heroes: newHeroList
//                 // filteredHeroes: state.activeFilter === 'all' ? 
//                 //                 newHeroList : 
//                 //                 newHeroList.filter(item => item.element === state.activeFilter)
//             }
//         default: return state
//     }
// }
