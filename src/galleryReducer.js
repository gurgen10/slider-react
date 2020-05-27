import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpg';
import photo3 from './assets/3.jpg';
import photo4 from './assets/4.jpeg';
import photo5 from './assets/5.jpg';

import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO, SHOW_PREV_PHOTO, AUTO_PHOTO } from './actionTypes';

const initialState = {
  photos: [
    { id: 1, url: photo1 },
    { id: 2, url: photo2 },
    { id: 3, url: photo3 },
    { id: 4, url: photo4 },
    { id: 5, url: photo5 },
  ],
  selectedPhotoIndex: 0,
  showGalary: true
};

const galleryReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_PREV_PHOTO:
      if (state.selectedPhotoIndex === 0) {
        return state;
      }
      
      return {
        ...state,
        selectedPhotoIndex: state.selectedPhotoIndex - 1,
      };
    case SHOW_NEXT_PHOTO:
      if (state.selectedPhotoIndex === state.photos.length - 1) {
        return state;
      }

      return {
        ...state,
        selectedPhotoIndex: state.selectedPhotoIndex + 1,
      };
    case SHOW_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhotoIndex: action.payload,
      };
      case AUTO_PHOTO:
          if (state.selectedPhotoIndex === state.photos.length - 1) {
            return {
              ...state,
              selectedPhotoIndex: 0,
            };
          }
    
          return {
            ...state,
            selectedPhotoIndex: state.selectedPhotoIndex + 1,
          };        
    default:
      return state;
  }
};

export default galleryReducer;