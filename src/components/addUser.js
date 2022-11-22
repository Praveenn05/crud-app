import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const AddUser = () => {

  const [name, SetName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const Navigate = useNavigate();
  const onSubmit = () => {
    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name
    }
    addUser(newUser);

    Navigate('/');
  }
  const onChange = (e) => {
    SetName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className='btn btn-danger'>Cancel</Link>
    </Form>
  )
};

export default AddUser;