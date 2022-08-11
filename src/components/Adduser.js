import React, { useContext ,useState} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link,useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import {
     Form, 
     FormGroup,
     Label,
     Input, 
     Button 
    } from "reactstrap";

function Adduser() {
  const [name,setName]=useState('')
  const history=useNavigate()
  const { addUser } = useContext(GlobalContext);
const onSubmit=()=>{
  const complete=false
const newUser={
  id:uuid(),
  name,
  complete
}
addUser(newUser)
history('/')
}

const onChange=(e)=>{
  setName(e.target.value)
}
  return (
    <div>
      <h1>Add Todos</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Todo</Label>
          <Input type="text"  value={name} onChange={onChange} placeholder="Enter Todos"></Input>
          
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to='/' className="btn btn-danger mx-2">Cancel</Link>
      </Form>
    </div>
  );
}

export default Adduser;
