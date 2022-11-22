import React, {useContext, useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';


export const EditUser = () =>
{
  const [selectedUser , SetselectedUser] = useState({
    id:'',
    name: ''
  });
  const params = useParams();

  const {users, editUser} = useContext(GlobalContext);
  const Navigate = useNavigate();
  const currentUserId = params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectUser = users.find(user => user.id === userId)
    SetselectedUser(selectUser)
  },[currentUserId, users])

  const onSubmit = () => {
    editUser(selectedUser)

    Navigate('/');
  }
  const onChange = (e) => {
    SetselectedUser({...selectedUser, [e.target.name]: e.target.value})
  }
  return (
    <Form onSubmit={onSubmit}>
    <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder='Enter Name'></Input>
    </FormGroup>
    <Button type='submit'>Edit Name</Button>
    <Link to="/" className='btn btn-danger'>Cancel</Link>
</Form>
  )
};

export default EditUser;