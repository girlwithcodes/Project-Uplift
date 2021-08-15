import { useState } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import './Blessings.css';

function Blessings(props) {
  return (
    <div className = "public-posts-page">
      <h2>Blessings</h2>
      {props.posts?.map((post)=>(
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default Blessings;