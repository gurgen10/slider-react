import { combineReducers } from 'redux';

import galleryReducer from './galleryReducer';

const reducer = combineReducers({
  gallery: galleryReducer
});

export default reducer;