import React, { useEffect, useState } from 'react';
import { registerbg } from '../../assets';
import { Gap, Link } from '../../components';
import './DetailBlog.scss';
import { Axios } from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      setData(res.data.data)
    })
    .catch (err => {
      console.log('error', err)
    })
  }, [props])

  const navigate = useNavigate();
  if(data.author){
    return (
      <div className="detail-blog-wrapper">
        <img className="img-cover" src={registerbg} alt="thumb" />
        <p className="blog-title">{data.title}</p>
        <p className="blog-author">{data.author.name} - {data.createdAt}</p>
        <p className="blog-body">{data.body}</p>
        <Gap height={20} />
        <Link title="Kembali ke Home" onClick={() => navigate('/')} />
      </div>
    )
  }
  return <p>Loading data...</p>
}

export default withRouter (DetailBlog);