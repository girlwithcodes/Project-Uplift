import { useState, useEffect } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import './Affirmations.css';

function Affirmations(props) {
  console.log(props.posts);
  
  return (
    <div className = "public-posts-page">
      <h2>Affirmations</h2>
      {props.posts?.map((post)=>(
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default Affirmations;