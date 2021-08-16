import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getUserBoard, editBoard } from '../../Services/boards';
import { getBoardPosts } from '../../Services/posts';
import PostCard from '../../Components/PostCard/PostCard';
import BoardCard from '../../Components/BoardCard/BoardCard';
import './UserBoard.css';

function UserBoard({user, board, setBoard}) {

  const history = useHistory();
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [editBoardForm, setEditBoardForm] = useState({
    name: '',
    description: '',
    cover_image_url: '',
    background_color: '',
    background_url: '',
    font: '',
    font_color: '',
    user_id: params.userID
  });
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const fontChoices = [['Arial'], ['Caveat', ' cursive'], ['Courgette', ' cursive']];
  const style = editFormVisibility ? 
    {
      backgroundImage: `url(${editBoardForm.background_url})`,
      backgroundColor: editBoardForm.background_color,
      color: editBoardForm.font_color,
      fontFamily: editBoardForm.font,
    }
    : 
    {
      backgroundImage: `url(${board.background_url})`,
      backgroundColor: board.background_color,
      color: board.font_color,
      fontFamily: board.font,
    }


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBoardForm({
      ...editBoardForm,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedBoard = await editBoard(params.userID, params.id, editBoardForm);
    setTimeout(()=>{
      history.go(0);
    },100)
  }

  const editForm = () => {
    return(
      <div className={setEditFormClass()}>
        <form className="edit-board-form" onSubmit={handleSubmit}>

        <div className="label-input-eb">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={editBoardForm.anme} 
            onChange={handleChange}
          />
        </div>

          <div className="label-input-eb">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={editBoardForm.description}
              onChange={handleChange}
            />
          </div>

        <div className="label-input-eb">
          <label htmlFor="cover_image_url">Cover Image URL</label>
          <input 
            type="text"
            id="cover_image_url"
            name="cover_image_url"
            value={editBoardForm.cover_image_url} 
            onChange={handleChange}
          />
        </div>

        <div className="label-input-eb">
          <label htmlFor="background_url">Background Image URL</label>
          <input 
            type="text"
            id="background_url"
            name="background_url"
            value={editBoardForm.background_url}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-eb">
          <label htmlFor="background_color">Background Color</label>
          <input 
            type="color"
            id="background_color"
            name="background_color"
            value={editBoardForm.background_color}
            onChange={handleChange}
          />
        </div>

        <div className="label-input-eb">
          <label htmlFor="font">Change font:</label>
          <select 
            id="font"
            name="font"
            onChange={handleChange}
            > 
            {fontChoices.map((font, index)=>(
              <option key={index} value={font}>{font[0]}</option>
            ))}
            </select>
        </div>

        <div className="label-input-eb">
          <label htmlFor="font_color">Font Color</label>
          <input 
            type="color"
            id="font_color"
            name="font_color"
            value={editBoardForm.font_color}
            onChange={handleChange}
          />
        </div>
          <button>Save Settings</button>
        </form>
      </div>
    )
  }
  if(!editFormVisibility) {
    return (
      <div className = "user-board-page" style={style}>
        <div className="edit-board-button-div">
          <button 
            className="edit-board-button"
            onClick={toggleEditForm}>
              Edit Settings
            </button>
        </div>
        <div className="user-board-header">
          <h2> {board?.name} </h2>
          <p>{board?.description}</p>
        </div>
      
        {posts?.map((post)=>(
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostCard  post={post}/>
          </Link>
        ))}
      </div>
    )
  } else {
    return (
      <div className = "user-board-page" style={style}>
        <div className="edit-board-button-div">
          
          <button 
            className="edit-board-button"
            onClick={toggleEditForm}>
              Close Settings
            </button>

          <div className="board-card-preview-div">
            <BoardCard board={editBoardForm} />
          </div>
          {editForm()}

        </div>
        <div className="user-board-header-edit">
          <h2> {editBoardForm.name} </h2>
          <p>{editBoardForm.description}</p>
        </div>
      
        {posts?.map((post)=>(
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostCard  post={post}/>
          </Link>
        ))}
      </div>
    )
  }
}

export default UserBoard;