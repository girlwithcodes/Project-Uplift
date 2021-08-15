import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserBoard } from '../../Services/boards';
import { getBoardPosts } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';
import './UserBoard.css';

function UserBoard({user, board, setBoard}) {
  // const [board, setBoard] = useState({});
  const [posts, setPosts] = useState([]);
  const params = useParams();


  useEffect(()=>{
    const fetchBoard = async() => {
      const userBoard = await getUserBoard(params.userID, params.id);
      setBoard(userBoard);
    }
    fetchBoard();
  },[])

  useEffect(()=>{
    const fetchPosts = async() => {
      const boardPosts = await getBoardPosts(params.userID, params.id);
      console.log(boardPosts)
      setPosts(boardPosts);
    }
    fetchPosts();
  },[])

  return (
    <div className = "user-board-page">
      <h2> {board?.name} </h2>
      {posts.map((post)=>(
        <Link to={`/post/${post.id}`}>
          <PostCard key={post.id} post={post}/>
        </Link>
      ))}
    </div>
  )
}

export default UserBoard;