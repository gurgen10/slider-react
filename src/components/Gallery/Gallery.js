import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { bounce, fadeIn, fadeInDown, fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import { showNextPhoto, showSelectedPhoto, showPrevPhoto, autoSelectedPhoto } from '../../actions';
import './Gallery.css';

let intervalId;

const  Gallery = (props) => {
  const { 
    gallery, 
    showNextPhoto: nextPhoto, 
    showPrevPhoto: prevPhoto, 
    showSelectedPhoto: selectPhoto,
    autoSelectedPhoto
  } = props
  const image = gallery.photos.find((_, index) => index === gallery.selectedPhotoIndex);

  const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: [Radium.keyframes(bounce, 'bounce'), Radium.keyframes(fadeIn, 'fbounce')]
    }
  }
   

   useEffect(() => {
    return () => {
        clearInterval(intervalId)
    }
  }, []);

  const autoPhoto = () => {
    if(intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        autoSelectedPhoto();
      }, 1000)
    }
    
    
   const _prevPhoto = () => {
    if(intervalId) clearInterval(intervalId);
    prevPhoto()

   }

   const _nextPhoto = () => {
    if(intervalId) clearInterval(intervalId);
    nextPhoto()

   }

    return (
      <div className="Gallery">
         <StyleRoot >    
            <img 
              style={styles.bounce} 
              key={gallery.selectedPhotoIndex}   
              src={image.url} 
              alt="gallery" 
              className="Gallery_image" />
         </StyleRoot>       
        <div className="Gallery_buttons">
          <button onClick={_prevPhoto}>Հետ</button>
          {
            gallery.photos.map((photo, idx) => {
              const className = gallery.selectedPhotoIndex === idx ? 'active' : '';
  
              return (
                <button
                  onClick={() => {
                    if(intervalId) clearInterval(intervalId);
                    selectPhoto(idx)
                  } }
                  className={className}
                  key={photo.id}>
                  {photo.id}
                </button>
              )
            })
          }
          <button onClick={_nextPhoto}>Առաջ</button>
          <button onClick={autoPhoto}>Ինքնաթերթում</button>
        </div>
      </div>
    );  
}

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = dispatch =>  (
  bindActionCreators({showNextPhoto, showSelectedPhoto, showPrevPhoto, autoSelectedPhoto}, dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps )(Gallery);