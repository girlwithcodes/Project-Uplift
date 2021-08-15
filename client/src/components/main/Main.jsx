import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { getPublicPosts } from '../../Services/posts.js';
import Home from '../../Screens/Home/Home';
import Affirmations from '../../Screens/Affirmations/Affirmations';
import Celebrations from '../../Screens/Celebrations/Celebrations';
import Blessings from '../../Screens/Blessings/Blessings';
import Wisdom from '../../Screens/Wisdom/Wisdom';
import UserHome from '../../Screens/UserHome/UserHome.jsx';
import UserBoard from '../../Screens/UserBoard/UserBoard.jsx';
import PostDetail from '../../Screens/PostDetail/PostDetail.jsx';

function Main({ user }) {
  const [publicPosts, setPublicPosts] = useState([]);
  const [board, setBoard] = useState({});
  const [post, setPost] = useState({});

  useEffect(()=>{
    const getPosts = async() => {
      const posts = await getPublicPosts();
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
          posts={publicPosts.filter((post)=>post.post_type==='quote')}
        />
      </Route>

      <Route exact path = "/user/:userID/boards" >
        <UserHome user={user}/>
      </Route>
      
      <Route path="/user/:userID/boards/:id">
        <UserBoard user={user} board={board} setBoard={setBoard}/>
      </Route>

      <Route path="/post/:id">
        <PostDetail user={user} board={board} post={post} setPost={setPost}/>
      </Route>
    </div>

  )
}

export default Main;