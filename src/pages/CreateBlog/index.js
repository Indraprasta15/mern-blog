import React, { useEffect, useState } from 'react';
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components';
import './CreateBlog.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import { Axios } from 'axios';

const withRouter = Component => props => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  );
};

const CreateBlog = (props) => {
  const {form, imgPreview} = useSelector (state => state.createBlogReducer);
  const [title, body] = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
      const id = props.match.params.id;
      if(id){
        setIsUpdate(true);
        Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
          const data = res.data.data;
          console.log('res', res);
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
        })
        .catch(err => {
          console.log('error', err)
        })
      }
  }, [dispatch, props])

  const onSubmit = () => {
      const id = props.match.params.id;
      if(isUpdate){
        updateToAPI(form, id);
      } else {
        postToAPI(form);
      }
  }
  const onImageUpload = (e) => {
      const file = e.target.files[0];
      dispatch (setForm ('image', file))
      dispatch (setImgPreview(URL.createObjectURL(file)))
  }
  return (
    <div className="blog-post">
        <p className="title">{isUpdate ? 'Update' : 'Create New'}Blog Post</p>
        <Link title="Kembali" onClick={() => navigate('/')} />
        <Input label="Post Title" value={title} onChange={(e) => dispatch (setForm('title', e.target.value))}/>
        <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
        <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
        <Gap height={20}/>

        <div className="button-act">
          <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit}/>
        </div>
    </div>
  )
}

export default withRouter(CreateBlog);