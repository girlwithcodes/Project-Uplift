import { useState } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import './Celebrations.css';

function Celebrations(props) {
  return (
    <div className = "public-posts-page">
      <h2>Celebrations</h2>
      {props.posts?.map((post)=>(
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default Celebrations;