import React, { useState } from 'react'

const Filter = ({ onTitleChange, onRatingChange }) => {
     return (
     <div className='moviefilter2'>
     <label>Title:</label>
     <input type="text" onChange={onTitleChange} />
          <label>Rating:</label>
          <input type="number" min="0" max="10" onChange={onRatingChange} />
     </div>
     );
};

export default Filter