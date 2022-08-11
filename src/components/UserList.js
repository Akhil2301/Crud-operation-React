import React, { useContext ,useState,useEffect} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import { GlobalContext } from "../context/GlobalState";
function UserList() {
  

  const [selectedUser, setSelectedUser] = useState(
    { id:'',
     name:''
   }
   );
   const { users, removeUser,completeUser } = useContext(GlobalContext);
   const history = useNavigate();
   const { id } = useParams()
   const currentUserId=id
   
 
   useEffect(()=>{
     const userId=currentUserId;
     const selectUser=users.find(user=>user.id==userId)
    
       setSelectedUser(selectUser)
   },[currentUserId,users])
   
   const onSubmit = () => {
     completeUser(selectedUser)
     history("/");
   };
 
   const onChange = (e) => {
     setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
     
   };


  
console.log(users);
  return (
    <div>
      <ListGroup className="mt-3">
        {users.length > 0 ? (
          <>
            {users.map((user, key) => {
              return (
                <ListGroupItem
                  key={key}
                  className="d-flex justify-content-between"
                >

                  
                  <strong><input type='checkbox'  /> &nbsp;{user.name}</strong>
                  <div className="ml-auto">
                    <Link
                      className="btn btn-warning mx-2"
                      to={`/edit/${user.id}`}
                    >
                      edit
                    </Link>
                    <Button color="danger" onClick={() => removeUser(user.id)}>
                      Delete
                    </Button>
                  </div>
                </ListGroupItem>
              );
            })}
          </>
        ) : (
         <h1>No Todos</h1>
        )}
      </ListGroup>
    </div>
  );
}

export default UserList;
