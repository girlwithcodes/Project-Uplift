import { useState, useEffect } from 'react';
import './Affirmations.css';

function Affirmations(props) {
  useEffect(()=> {
    console.log(props.posts)
  })
  
  return (
    <div className = "public-posts-page">
      <h2>Affirmations</h2>
    </div>
  )
}

export default Affirmations;