import { useState, useEffect } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import './Wisdom.css';

function Wisdom(props) {
  console.log(props.posts);

  return (
    <div className = "public-posts-page">
      <h2>Wisdom</h2>
      {props.posts?.map((post)=>(
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default Wisdom;