import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Footer, Header } from '../../components';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import './MainApp.scss';

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Router>
              <Routes>
                  <Route path="/" element={<Home/>} ></Route>
                  <Route path="/create-blog" element={<CreateBlog />}></Route>
                  <Route path="/detail-blog" element={<DetailBlog />}></Route>
              </Routes>
          </Router>
       </div>
       <Footer />
    </div>
  )
}

export default MainApp;