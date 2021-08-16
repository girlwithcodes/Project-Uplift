import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import './Celebrations.css';

function Celebrations(props) {
  const orderedPosts = [...props.posts].reverse();

  return (
    <div className = "public-posts-page">
      <h2>Celebrations</h2>
      {orderedPosts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}

export default Celebrations;