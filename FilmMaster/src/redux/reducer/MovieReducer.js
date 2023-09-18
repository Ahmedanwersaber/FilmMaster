import { ALLMOVIE,Count } from "../type/MovieType";




const intial = { Movie: [], pagecount: 0 };
 const MoviesReducer = (state =  intial , action) => {
  switch (action.type) {
    case ALLMOVIE:
      return { Movie: action.data ,pagecount:action.pages}
    default:
      return state;
  }
};
export default MoviesReducer;