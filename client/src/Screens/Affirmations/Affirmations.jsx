import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PostCard from '../../Components/PostCard/PostCard';
import './Affirmations.css';

function Affirmations(props) {
  const orderedPosts = [...props.posts].reverse();

  return (
    <div className = "public-posts-page">
      <h2 className="public-posts-title">Affirmations</h2>
      <div className = "post-cards-div">
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 550: 2, 800: 3, 1050: 4, 1300: 5, 1550: 6}}>
            <Masonry>
            {orderedPosts?.map((post)=>(
              <Link to={`/post/${post.id}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
            </Masonry>
          </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Affirmations;