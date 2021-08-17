import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { getUserBoards, createBoard, deleteBoard } from '../../Services/boards';
import BoardCard from '../../Components/BoardCard/BoardCard';
import './UserHome.css';

function UserHome({ user, userBoards, setUserBoards }) {

  const params = useParams();
  

  const [createBoardForm, setCreateBoardForm] = useState({
    name: '',
    description: '',
    cover_image_url: '',
    background_color: '#FFFFFF',
    background_url: null,
    font: 'Arial',
    font_color: '#000000',
    user_id: params.userID
  })

  const [deleteButtonVisibility, setDeleteButtonVisibility] = useState(false);
  const [createFormVisibility, setCreateFormVisibility] = useState(false);
  
  
  useEffect(()=>{
    const fetchBoards = async() => {
      const boards = await getUserBoards(params.userID);
      setUserBoards(boards);
    } 
    fetchBoards();
  },[])

  const toggleDeleteButton = () => {
    setDeleteButtonVisibility((deleteButtonVisibility)=>!deleteButtonVisibility);
  }

  const setDeleteButtonClasses = () => {
    return deleteButtonVisibility ? "board-delete-button" : "board-delete-button invisible";
  }

  const toggleCreateForm = () => {
    setCreateFormVisibility((createFormVisibility)=>!createFormVisibility);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateBoardForm({
      ...createBoardForm,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    toggleCreateForm();
    const newBoard = await createBoard(user.id, createBoardForm);
    setUserBoards((prevBoards)=>[...prevBoards, newBoard]);
  }

  const handleDelete = async(boardID) => {
    const updatedBoardsList = await deleteBoard(params.userID, boardID);
    setUserBoards(updatedBoardsList);
  }

  const createCard = () => {
    if(createFormVisibility) {
      return (
        <div className="add-board-div">

          <div className="x-button-container">
            <div className="x" onClick={toggleCreateForm}></div>
          </div>

          <form className="create-board-form" onSubmit={handleSubmit}>
            <div className="label-input-cb">
              <label htmlFor="name">Name:</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={createBoardForm.name}
                onChange={handleChange}
              />
            </div>

            <div className="label-input-cb">
              <label htmlFor="description">Description:</label>
              <textarea 
                id="description"
                name="description"
                value={createBoardForm.description}
                onChange={handleChange}
              />
            </div>

            <div className="label-input-cb">
              <label htmlFor="cover_image_url">Cover Image URL:</label>
              <input 
                type="text"
                id="cover_image_url"
                name="cover_image_url"
                value={createBoardForm.cover_image_url}
                onChange={handleChange}
              />
            </div>
            <button>Save</button>
          </form>
        </div>

      )
    } else {
      return (
        <div className="add-board-div">
          <div className="plus-button-container">
            <div className="plus" onClick={toggleCreateForm}></div>
          </div>
          <div className="add-board-text">Create a Board</div>
        </div>  
      )
    }
  }

  return(
    <div className="user-home-page">
      <h2 className="user-home-title">My Boards</h2>
      
      <div className="delete-board-button-div">
        <button 
          className="delete-board-button"
          onClick={toggleDeleteButton}>
          {deleteButtonVisibility ? "Close Delete" : "Delete A Board"}
        </button>
      </div>

      <div className="board-cards-div">
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4, 1500: 5}}>
          <Masonry>
            {userBoards?.map((board)=>(
              <div className="user-home-board-card" key={board.id}>
                <Link 
                  to={ `/user/${user?.id}/boards/${board.id}`}>
                  <BoardCard board={board}/>
                </Link>
                <button 
                  className={setDeleteButtonClasses()}
                  onClick={() => handleDelete(board.id)}
                >
                Delete Board
                </button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {createCard()}
      </div>
    </div>
  )
}

export default UserHome;