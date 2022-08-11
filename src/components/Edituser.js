import React, { useContext, useState,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useParams } from "react-router-dom";
function Edituser(props) {
  const [selectedUser, setSelectedUser] = useState(
   { id:'',
    name:''}
  );
  const { users,editUser } = useContext(GlobalContext);
  const history = useNavigate();
  const { id } = useParams()
  const currentUserId=id
  

  useEffect(()=>{
    const userId=currentUserId;
    const selectUser=users.find(user=>user.id==userId)
   
      setSelectedUser(selectUser)
  },[currentUserId,users])
  
  const onSubmit = () => {
    editUser(selectedUser)
    history("/");
  };

  const onChange = (e) => {
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    console.log(selectedUser);
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Todos</Label>
          <Input type="text" name='name' value={selectedUser.name} onChange={onChange} placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default Edituser;
