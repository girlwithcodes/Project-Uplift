import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getUserBoards } from '../../Services/boards';
import BoardCard from '../../Components/BoardCard/BoardCard';
import UserBoard from '../UserBoard/UserBoard';

function UserHome({ user }) {
  const [boards, setBoards] = useState([]);
  const params = useParams();
  
  useEffect(()=>{
    const fetchBoards = async() => {
      const userBoards = await getUserBoards(params.userID);
      console.log(userBoards);
      setBoards(userBoards);
    } 
    fetchBoards();
  },[])

  return(
    <div className="user-home-page">
      <h2>My Boards</h2>
      {boards?.map((board)=>(
        <Link to={{
          pathname: `/user/${user?.id}/boards/${board.id}`,
          board: board
          }} 
          key={board.id}>
          <BoardCard board={board}/>
        </Link>
      ))}

    </div>
  )
}

export default UserHome;