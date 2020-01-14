import React from 'react';

import classes from './SwissImage.css';
import SwissImg from '../../assets/swiss.jpg';

const SwissImage = props => {
  return (
    <div className={classes.viewImageWrapper}>
      <img src={SwissImg} alt='swiss' className={classes.viewImage} />
    </div>
  );
};

export default SwissImage;
