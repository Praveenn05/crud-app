import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const Userlist = () => {
    const {users, removeUser} = useContext(GlobalContext);
    
    return (
        <ListGroup className='mt-4'>
            {users.map(user =>(
            <ListGroupItem className='d-flex'>
                <strong>{user.name}</strong>
                <div className='mi-auto'></div>
                <Link className='btn btn-warning' to={`/edit/${user.id}`}>Edit</Link>
                <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
            </ListGroupItem>

            ))}
    
        </ListGroup>
    )
};

