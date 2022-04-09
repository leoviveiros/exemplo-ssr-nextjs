import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const UsersPage: NextPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/db.json').then(res => setUsers(res.data.users));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users && users.map((user: any, key) => <li key={key}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UsersPage;