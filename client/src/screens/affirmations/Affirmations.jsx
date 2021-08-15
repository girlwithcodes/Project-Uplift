import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import './Affirmations.css';

function Affirmations(props) {
  console.log(props.posts);
  
  return (
    <div className = "public-posts-page">
      <h2>Affirmations</h2>
      {props.posts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}

export default Affirmations;