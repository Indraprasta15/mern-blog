import React from 'react';
import { Button, Gap } from '../../atoms';
import './Blogitems.scss';
import { useNavigate } from 'react-router-dom';

const Blogitems = (props) => {
  const navigate = useNavigate();
  const{image, title, name, date, body, _id, onDelete} = props;
  return (
    <div className="blog-item">
        <img className="img-thumb" src={image} alt="post" />
        <div className="content-detail">
          <div className='title-wrapping'>
            <p className="title">{title}</p>
            <div className='edit-wrapper'>
              <p className='edit' onClick={() => navigate(`/create-blog/${_id}`)}>Edit</p> | <p className='delete' onClick={() => onDelete(_id)}>Delete</p>
            </div>
          </div>
            <p className="author">{name} - {date}</p>
            <p className="body">{body}</p>
            <Gap height={20} />
            <Button title="View Detail" onClick={() => navigate(`/detail-blog/${_id}`)} /> 
       
        </div>
    </div>
  )
}

export default Blogitems;