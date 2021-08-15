import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import './Wisdom.css';

function Wisdom(props) {
  console.log(props.posts);

  return (
    <div className = "public-posts-page">
      <h2>Wisdom</h2>
      {props.posts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}

export default Wisdom;