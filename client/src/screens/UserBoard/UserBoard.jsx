import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserBoard } from '../../Services/boards';
import { getBoardPosts } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';
import './UserBoard.css';

function UserBoard({user, board, setBoard}) {

  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [editBoardForm, setEditBoardForm] = useState({});
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const fontChoices = [['Arial'], ['Caveat', ' cursive'], ['Courgette', ' cursive']];


  useEffect(()=>{
    const fetchBoard = async() => {
      const userBoard = await getUserBoard(params.userID, params.id);
      setBoard(userBoard);
      setEditBoardForm(userBoard);
    }
    fetchBoard();
  },[])

  useEffect(()=>{
    const fetchPosts = async() => {
      const boardPosts = await getBoardPosts(params.userID, params.id);
      console.log(boardPosts)
      setPosts([...boardPosts].reverse());
    }
    fetchPosts();
  },[])

  const toggleEditForm = () => {
    setEditFormVisibility((editFormVisibility)=>!editFormVisibility);
  }

  const setEditFormClass = () => {
    return editFormVisibility ? "edit-board-form-div" : "edit-board-form-div invisible"
  }

  const editForm = () => {
    return(
      <div className={setEditFromClass()}>
        <form className="edit-board-form">
          
        </form>
      </div>
    )
  }

  return (
    <div className = "user-board-page">
      <div className="edit-board-button-div">
        <button 
          className="edit-board-button"
          onClick={toggleEditForm}>
            Edit Settings
          </button>
      </div>
      <h2> {board?.name} </h2>
      <p>{board?.description}</p>
      
      {posts?.map((post)=>(
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostCard  post={post}/>
        </Link>
      ))}
    </div>
  )
}

export default UserBoard;