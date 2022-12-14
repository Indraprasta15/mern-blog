import React from 'react';
import './Upload.scss';

const Upload = ({img, ...rest}) => {
  return (
    <div className="upload">
        {img && <img className="preview" src={img} alt="Preview" />}
        <input type="file" {...rest}/>
    </div>
  )
}

export default Upload;