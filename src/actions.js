import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO, SHOW_PREV_PHOTO, AUTO_PHOTO } from './actionTypes';

export const showNextPhoto = () => ({
  type: SHOW_NEXT_PHOTO
});

export const showSelectedPhoto = (selectedPhoto) => ({
  type: SHOW_SELECTED_PHOTO,
  payload: selectedPhoto,
});

export const showPrevPhoto =  () => ({
  type: SHOW_PREV_PHOTO
});

export const autoSelectedPhoto = () => ({
  type: AUTO_PHOTO
});