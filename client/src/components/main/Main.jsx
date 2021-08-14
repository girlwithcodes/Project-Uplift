import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getPublicPosts } from '../../services/posts.js';
import Home from '../../screens/home/Home';
import Affirmations from '../../screens/affirmations/Affirmations';
import Celebrations from '../../screens/celebrations/Celebrations';
import Blessings from '../../screens/blessings/Blessings';
import Wisdom from '../../screens/wisdom/Wisdom';

function Main() {
  const [publicPosts, setPublicPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async() => {
      const posts = await getPublicPosts();
      console.log(posts);
      setPublicPosts(posts);
    }
    getPosts();
  }, [])

  return (
    <div className = "main">
      <Route exact path = "/">
        <Home />
      </Route>

      <Route path = '/affirmations'>
        <Affirmations 
          posts={publicPosts.filter((post)=>post.post_type==='affirmation')}
        />
      </Route>

      <Route path = '/celebrations'>
        <Celebrations 
          posts={publicPosts.filter((post)=>post.post_type==='celebrations')}
        />
      </Route>

      <Route path = '/blessings'>
        <Blessings 
          posts={publicPosts.filter((post)=>post.post_type==='blessings')}
        />
      </Route>

      <Route path = '/wisdom'>
        <Wisdom 
          posts={publicPosts.filter((post)=>post.post_type==='wisdom')}
        />
      </Route>
      
    </div>

  )
}

export default Main;