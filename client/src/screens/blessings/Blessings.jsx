import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import './Blessings.css';

function Blessings(props) {
  return (
    <div className = "public-posts-page">
      <h2>Blessings</h2>
      {props.posts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}

export default Blessings;