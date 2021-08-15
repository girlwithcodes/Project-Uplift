import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getUserBoards } from '../../Services/boards';
import BoardCard from '../../Components/BoardCard/BoardCard';


function UserHome({ user, userBoards, setUserBoards }) {
  const params = useParams();
  
  useEffect(()=>{
    const fetchBoards = async() => {
      const boards = await getUserBoards(params.userID);
      setUserBoards(boards);
    } 
    fetchBoards();
  },[])

  return(
    <div className="user-home-page">
      <h2>My Boards</h2>
      {userBoards?.map((board)=>(
        <Link 
          to={ `/user/${user?.id}/boards/${board.id}`} 
          key={board.id}>
          <BoardCard board={board}/>
        </Link>
      ))}

    </div>
  )
}

export default UserHome;