import React, { useEffect, useState} from 'react'
import { Blogitems, Button, Gap } from '../../components';
import './Home.scss';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Axios } from 'axios';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const {dataBlog, page} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(setDataBlog(counter))
  }, [counter, dispatch])

  const navigate = useNavigate();

  const previous = () => {
      setCounter(counter <= 1 ? 1 : counter - 1)
  }

  const next = () => {
      setCounter(counter === page.totalPage ? page.totalPage :counter + 1)
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah anda yakin akan menghapus post ini?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log('delete success: ', res);
              dispatch(setDataBlog(counter));
            })
            .catch(err => {
              console.log('err: ', err)
            })
          }
        },
        {
          label: 'tidak',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" 
          onClick={()=> navigate("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map(blog => {
          return <Blogitems key={blog._id} 
              image = {`http://localhost:4000/${blog.image}`} 
              title = {blog.title} 
              body = {blog.body} 
              name = {blog.author.name} 
              date = {blog.createdAt} 
              _id = {blog._id}
              onDelete = {confirmDelete}
              />
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous}/>
        <Gap width={20} />
        <p className='text-page'>{page.current_page} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next}/>
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home;