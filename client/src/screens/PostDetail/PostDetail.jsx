import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetail.css';

function PostDetail(){
  const [post, setPost] = useState({});
  
  return (
    <div className = "post-detail-page">
      post detail
    </div>
  )
}

export default PostDetail;